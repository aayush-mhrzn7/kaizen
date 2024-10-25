import { useEffect } from "react";

type toastProps = {
  message: string;
  type: "sucess" | "error";
  onClose: () => void;
};
function Toast({ message, type, onClose }: toastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);
  return (
    <div
      className={`${
        type == "sucess"
          ? `z-50 fixed top-3 right-6 bg-primaryGreen hover:bg-primaryGreenDarker`
          : "z-50 fixed top-3 right-6 bg-red-500 hover:bg-red-900"
      } p-4 mx-10 font-semibold font-primaryFont`}
      onClick={onClose}
    >
      {message}
    </div>
  );
}

export default Toast;
