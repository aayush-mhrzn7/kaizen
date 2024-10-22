import Button from "../Components/Button";
import { FaGoogle } from "react-icons/fa6";
import Input from "../Components/Input";

export default function Login() {
  return (
    <div className="h-screen bg-primaryDark font-primaryFont flex justify-center items-center ">
      <div className="bg-gradient-to-r from-[#5b9276] to-[#818f87] blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-72 w-72 rounded-full z-0 opacity-60"></div>
      <div className="p-4 relative z-50">
        <h1 className="text-3xl  text-white m-5  text-center font-medium">
          Welcome to Kaizen
        </h1>
        <span className="block text-unhighlighted font-medium text-center mb-4 text-sm capitalize">
          login or register with your email
        </span>
        <Button
          buttonStyles=" flex justify-center items-center gap-4 bg-primaryGreen hover:bg-primaryGreenDarker  text-white hover:text-unhighlighted transition-colors "
          buttonType="button"
        >
          <FaGoogle /> continue with google
        </Button>

        {/*  <Input
          inputTypes="text"
          placeholder="Email"
          inputStyles="text-center bg-secondaryDark hover:bg-white/10 transition-colors text-unhighlighted"
        />
        <Button
          buttonStyles=" flex  justify-center items-center gap-4 bg-secondaryDark text-unhighlighted  hover:bg-white/10 transition-colors  "
          buttonType="button"
        >
          Continue
        </Button> */}
      </div>
    </div>
  );
}
