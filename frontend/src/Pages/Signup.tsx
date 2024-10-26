import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import axios from "axios";
import { useAppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
type signupData = {
  name: string;
  email: string;
  password: string;
};
const initalData: signupData = {
  name: "",
  email: "",
  password: "",
};
export default function Signup() {
  const { showToast } = useAppContext();
  const [data, setData] = useState<signupData>(initalData);
  const updateData = (newData: Partial<signupData>) => {
    setData((prev) => {
      return { ...prev, ...newData };
    });
  };
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/login`,
      data
    );
    console.log(response);
    if (!response) {
      showToast({ message: "Error ", type: "error" });
    }
    showToast({ message: "Sucessfully  Logged In", type: "sucess" });
  }
  return (
    <Container containerStyle=" flex bg-primaryLightMode  justify-center items-center">
      <div className="p-4 ">
        <h1 className="text-3xl text-primaryDark m-5 text-center font-medium">
          Welcome to Kaizen
        </h1>
        <span className="block text-primaryDark font-medium text-center mb-4 text-sm capitalize">
          Register with your email
        </span>

        <form
          onSubmit={(e: FormEvent) => {
            handleSubmit(e);
          }}
        >
          <Input
            inputTypes="text"
            placeholder="Name"
            inputStyles="text-center transition-colors text-primaryDark focus:outline focus:outline-primaryGreen"
            aria-label="Name"
            value={data.name}
            onchange={(e: ChangeEvent<HTMLInputElement>) => {
              updateData({ name: e.target.value });
            }}
          />
          <Input
            inputTypes="email"
            placeholder="Email"
            inputStyles="text-center transition-colors text-primaryDark focus:outline focus:outline-primaryGreen"
            aria-label="Email"
            value={data.email}
            onchange={(e: ChangeEvent<HTMLInputElement>) => {
              updateData({ email: e.target.value });
            }}
          />
          <Input
            inputTypes="password"
            placeholder="Password"
            inputStyles="text-center transition-colors text-primaryDark focus:outline focus:outline-primaryGreen"
            aria-label="Password"
            value={data.password}
            onchange={(e: ChangeEvent<HTMLInputElement>) => {
              updateData({ password: e.target.value });
            }}
          />
          <Button
            buttonStyles="flex justify-center items-center gap-4 bg-primaryGreen hover:bg-primaryGreenDarker text-white hover:text-unhighlighted transition-colors focus:outline focus:outline-primaryGreenDarker"
            buttonType="submit"
          >
            Register
          </Button>
        </form>
        <span className="text-primaryDark">
          Already have an account?
          <Link to="/login" className="ml-2 hover:text-primaryGreen">
            Click Here
          </Link>
        </span>
      </div>
    </Container>
  );
}
