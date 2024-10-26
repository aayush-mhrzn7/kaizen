import React from "react";
import { FiX } from "react-icons/fi";

type ModalProps = {
  onclick?: () => void;
};

export default function Modal({ onclick }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white h-96 w-full max-w-lg p-4  rounded-lg shadow-lg z-10">
        <span className="flex justify-between items-center">
          <h4>New Habit Tracker</h4>
          <FiX onClick={onclick} className="cursor-pointer" />
        </span>
      </div>
    </div>
  );
}
