import { ChangeEvent } from "react";

type InputProps = {
  inputTypes: "date" | "text" | "password" | "email";
  inputStyles?: string;
  placeholder: string;
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
  value?: string;
};
export default function Input({
  inputTypes,
  inputStyles,
  placeholder,
  onchange,
  label,
  id,
  value,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={inputTypes}
        className={`${inputStyles}  p-4 font-semibold  my-3 rounded-lg   w-full`}
        onChange={onchange}
        placeholder={placeholder}
        id={id}
        value={value}
      />
    </div>
  );
}
