import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Card from "../Components/Card";
import Container from "../Components/Container";
import Modal from "../Components/Modal";
import axios from "axios";
import empty from "../assets/empty.png";
type PostType = {
  _id: string;
  postName: string;
  date?: string;
};
var panelColors = ["#eeeeee", "#F4998D", "#519872"];
export default function Home() {
  const dat = new Date();
  const unforamtedDate = dat.toISOString();
  const date = unforamtedDate.split("T")[0];
  var until = dat.toLocaleDateString();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);
  function toggleModal() {
    setshowModal(!showModal);
  }
  async function updateDateOnPost(postId: string) {
    const response = await axios.post(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/api/toggleContributionDate/${postId}`,
      { date },
      { withCredentials: true }
    );

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, date: response.data.post.date } : post
      )
    );
  }
  const fetchData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/all-posts`,
      { withCredentials: true }
    );
    setPosts(response.data.posts);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container containerStyle="bg-primaryLightMode  flex-col  p-10 ">
      {showModal ? (
        <Modal onclick={toggleModal} onPostCreated={() => fetchData()} />
      ) : null}
      <div
        className="bg-primaryGreen fixed bottom-4 right-4 cursor-pointer w-14 h-14 flex items-center justify-center rounded-full z-50"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => toggleModal()}
      >
        <FiPlus className="text-white text-4xl font-bold" />
        {showTooltip && (
          <span className="absolute bottom-16 right-10  bg-gray-800 text-white text-sm py-1 px-3 rounded shadow-lg">
            New Habit Tracker
          </span>
        )}
      </div>
      {posts.length == 0 ? (
        <div className="flex justify-center items-center mt-48 flex-col">
          <h4 className="font-medium text-2xl max-md:text-xl text-primaryGreen">
            No Habits being tracked
          </h4>
          <img src={empty} alt="" width={300} />
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-2 max-sm:grid-cols-1 z-10">
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.postName}
              onClick={() => updateDateOnPost(post._id)}
              values={post.date ? post.date : {}}
              pannelColors={panelColors}
              until={until}
              isChecked={post.date ? post.date.hasOwnProperty(date) : false} // Check if today's date exists as a key
            />
          ))}
        </div>
      )}
    </Container>
  );
}
