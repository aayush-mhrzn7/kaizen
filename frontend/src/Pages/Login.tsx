import Button from "../Components/Button";
import Input from "../Components/Input";

export default function Login() {
  return (
    <div className="h-screen bg-primaryDark font-primaryFont flex justify-center items-center">
      <div className="p-4 ">
        <h1 className="text-3xl text-white m-5 text-center font-medium">
          Welcome to Kaizen
        </h1>
        <span className="block text-unhighlighted font-medium text-center mb-4 text-sm capitalize">
          Login or register with your email
        </span>

        <form>
          <Input
            inputTypes="text"
            placeholder="Name"
            inputStyles="text-center bg-secondaryDark hover:bg-white/10 transition-colors text-unhighlighted focus:outline focus:outline-primaryGreen"
            aria-label="Name"
          />
          <Input
            inputTypes="email"
            placeholder="Email"
            inputStyles="text-center bg-secondaryDark hover:bg-white/10 transition-colors text-unhighlighted focus:outline focus:outline-primaryGreen"
            aria-label="Email"
          />
          <Input
            inputTypes="password"
            placeholder="Password"
            inputStyles="text-center bg-secondaryDark hover:bg-white/10 transition-colors text-unhighlighted focus:outline focus:outline-primaryGreen"
            aria-label="Password"
          />
          <Button
            buttonStyles="flex justify-center items-center gap-4 bg-primaryGreen hover:bg-primaryGreenDarker text-white hover:text-unhighlighted transition-colors focus:outline focus:outline-primaryGreenDarker"
            buttonType="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
