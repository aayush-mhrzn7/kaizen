type InputProps = {
  inputTypes: "date" | "text" | "password";
  inputStyles?: string;
  placeholder: string;
  onchange?: () => void;
  label?: string;
  id?: string;
};
export default function Input({
  inputTypes,
  inputStyles,
  placeholder,
  onchange,
  label,
  id,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={inputTypes}
        className={`${inputStyles} p-4 font-semibold  my-3 rounded-lg   w-full`}
        onChange={onchange}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}
