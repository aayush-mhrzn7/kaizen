import { FiX } from "react-icons/fi";
import Button from "./Button";
import axios from "axios";

type ModalPostProps = {
  onclick: () => void;
  post: any;
  onPostDeleted: (postId: string) => void; // Add the callback type
};

export default function PostModal({
  onclick,
  post,
  onPostDeleted,
}: ModalPostProps) {
  const consistencyPercentage = post.values
    ? ((Object.keys(post.values).length / 365) * 100).toFixed(2)
    : 0;
  const noOfContributions = post.values ? Object.keys(post.values).length : 0;

  const deletePost = async () => {
    const res = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/delete/${post.postId}`,
      { withCredentials: true }
    );
    onPostDeleted(post.postId);
    onclick();
    console.log(res);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white w-full max-w-lg p-4 rounded-lg shadow-lg z-10">
        <span className="flex justify-between items-center">
          <h4 className="text-primaryGreen font-bold text-xl">{post.title}</h4>
          <FiX onClick={onclick} className="cursor-pointer" />
        </span>
        <div className="grid grid-cols-3 mt-5 gap-4 items-center">
          <div>
            <h3 className="text-center text-3xl font-semibold text-primaryGreen">
              {consistencyPercentage ? consistencyPercentage : 0} %
            </h3>
            <span className="text-center font-medium capitalize block">
              consistency
            </span>
          </div>
          <div>
            <h3 className="text-center text-3xl font-semibold text-primaryGreen">
              {noOfContributions ? noOfContributions : 0}
            </h3>
            <span className="text-center font-medium capitalize block">
              Days Showed up
            </span>
          </div>
          <div>
            <Button
              buttonType="button"
              onclick={deletePost}
              buttonStyles="bg-red-500 hover:bg-red-900 transition-colors text-white w-full"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
