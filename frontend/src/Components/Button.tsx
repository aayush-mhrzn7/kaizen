import { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
  buttonStyles?: string;
  onclick?: () => void;
  buttonType: "button" | "submit" | "reset";
};
export default function Button({
  children,
  buttonStyles,
  onclick,
  buttonType,
}: buttonProps) {
  return (
    <button
      className={`${buttonStyles}  p-4 font-semibold text-white hover:text-unhighlighted my-3 rounded-lg capitalize  w-full`}
      onClick={() => onclick}
      type={buttonType}
    >
      {children}
    </button>
  );
}
