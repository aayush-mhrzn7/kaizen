import Button from "../Components/Button";
import { FaGoogle } from "react-icons/fa6";
export default function Login() {
  return (
    <div className="h-screen bg-primaryDark font-primaryFont flex justify-center items-center ">
      <div className="p-4 ">
        <h1 className="text-3xl text-white m-5   font-medium">
          Welcome to Kaizen
        </h1>
        <span className="block text-unhighlighted font-medium text-center mb-4 text-sm capitalize">
          login or register with your email
        </span>
        <Button
          buttonStyles=" flex justify-center items-center gap-4 bg-primaryGreen hover:bg-primaryGreenDarker"
          buttonType="button"
        >
          <FaGoogle /> continue with google
        </Button>
      </div>
    </div>
  );
}
