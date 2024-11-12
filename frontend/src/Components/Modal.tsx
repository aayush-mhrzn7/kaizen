import { useState } from "react";
import { FiX } from "react-icons/fi";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import { useAppContext } from "../contexts/AppContext";

type ModalProps = {
  onclick: () => void;
  onPostCreated: () => void;
};

export default function Modal({ onclick, onPostCreated }: ModalProps) {
  const { showToast } = useAppContext();
  const [input, setInput] = useState("");
  const createNewPost = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/create`,
      {
        postName: input,
      },
      { withCredentials: true }
    );
    console.log(response.data);
    if (!response) {
      showToast({ message: "failed creating post", type: "error" });
    }
    onPostCreated();
    setInput("");

    showToast({ message: " created post", type: "sucess" });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative mx-10 bg-white  w-full max-w-lg p-4  rounded-lg shadow-lg z-10">
        <span className="flex justify-between items-center">
          <h4 className="text-primaryGreen font-bold text-xl">
            New Habit Tracker
          </h4>
          <FiX onClick={onclick} className="cursor-pointer" />
        </span>
        <Input
          inputTypes="text"
          inputStyles="border-2"
          placeholder="Workout"
          onchange={(e) => setInput(e.target.value)}
        />
        <Button
          onclick={() => createNewPost()}
          buttonType="button"
          buttonStyles="bg-primaryGreen text-white"
        >
          Add New
        </Button>
      </div>
    </div>
  );
}
