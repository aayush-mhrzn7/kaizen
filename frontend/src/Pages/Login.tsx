import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import axios from "axios";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Components/Container";
import { FiEye, FiEyeOff } from "react-icons/fi";
type loginData = {
  email: string;
  password: string;
};
const initalData: loginData = {
  email: "",
  password: "",
};
export default function Login() {
  const [showEye, setShowEye] = useState(false);
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const [data, setData] = useState<loginData>(initalData);
  const updateData = (newData: Partial<loginData>) => {
    setData((prev) => {
      return { ...prev, ...newData };
    });
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/login`,
      data,
      { withCredentials: true }
    );
    console.log(response);
    if (!response) {
      showToast({ message: "Failed to Log In", type: "error" });
    }
    showToast({ message: response.data.message, type: "sucess" });
    navigate("/");
  }
  const toggleEye = () => {
    setShowEye(!showEye);
  };
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
          <div className="relative">
            <Input
              inputTypes={showEye ? "text" : "password"}
              placeholder="Password"
              inputStyles="text-center font-normal  transition-colors text-primaryDark focus:outline focus:outline-primaryGreen"
              aria-label="Password"
              value={data.password}
              onchange={(e: ChangeEvent<HTMLInputElement>) => {
                updateData({ password: e.target.value });
              }}
            />
            <FiEyeOff
              onClick={toggleEye}
              className={`${
                showEye ? `hidden` : ``
              }  absolute top-[40%] right-4  text-primaryGreen`}
            />
            <FiEye
              onClick={toggleEye}
              className={` ${
                showEye ? `` : `hidden`
              } absolute top-[40%] right-4 text-primaryGreen`}
            />
          </div>
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
