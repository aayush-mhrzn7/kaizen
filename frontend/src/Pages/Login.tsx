import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import axios from "axios";
import { useAppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
type loginData = {
  email: string;
  password: string;
};
const initalData: loginData = {
  email: "",
  password: "",
};
export default function Login() {
  const { showToast } = useAppContext();
  const [data, setData] = useState<loginData>(initalData);
  const updateData = (newData: Partial<loginData>) => {
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
      showToast({ message: "Error cant Signup", type: "error" });
    }
    showToast({ message: "Sucessfully  signed up", type: "sucess" });
  }

  return (
    <Container containerStyle="flex bg-primaryLightMode  justify-center items-center">
      <div className="p-4 ">
        <h1 className="text-3xl text-primaryDark m-5 text-center font-medium">
          Welcome to Kaizen
        </h1>
        <span className="block text-primaryDark font-medium text-center mb-4 text-sm capitalize">
          Login with your email
        </span>

        <form
          onSubmit={(e: FormEvent) => {
            handleSubmit(e);
          }}
        >
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
            Login
          </Button>
        </form>
        <span className="text-primaryDark">
          Create an account?
          <Link to="/signup" className="  ml-2 hover:text-primaryGreen">
            Click Here
          </Link>
        </span>
      </div>
    </Container>
  );
}
