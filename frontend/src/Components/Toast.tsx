import { useEffect } from "react";
import { FiX } from "react-icons/fi";

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
          ? `z-50 fixed bottom-5 left-2 bg-primaryGreen hover:bg-primaryGreenDarker transition-colors `
          : "z-50 fixed bottom-5 left-2 bg-red-500 hover:bg-red-900"
      } p-4 flex justify-center  items-center gap-4 mx-10 font-semibold font-primaryFont text-white rounded-md`}
    >
      <FiX className="font-extrabold " onClick={onClose} /> {message}
    </div>
  );
}

export default Toast;
