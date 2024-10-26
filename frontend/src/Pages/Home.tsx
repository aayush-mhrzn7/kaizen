import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Card from "../Components/Card";
import Container from "../Components/Container";
import Modal from "../Components/Modal";
var until = "2016-06-30";
var values = {
  "2016-06-23": 1,
  "2016-06-26": 2,
  "2016-06-27": 3,
  "2016-06-28": 4,
  "2016-04-29": 1,
};
// Panel colors: inactive = 1, active = 2
var panelColors = ["#eeeeee", "#F4998D", "#519872"];
export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setshowModal] = useState(false);
  function toggleModal() {
    setshowModal(!showModal);
  }
  async function updateDateOnPost() {
    const date = new Date();
    console.log(date.toLocaleDateString());
    //axios ma pos
  }
  updateDateOnPost();
  return (
    <Container containerStyle="bg-primaryLightMode flex  items-center flex-col  p-10 ">
      {showModal ? <Modal onclick={toggleModal} /> : null}
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
      <div className="grid gap-6 grid-cols-2 max-sm:grid-cols-1 z-10">
        <Card
          title="Workout"
          onClick={updateDateOnPost}
          values={values}
          pannelColors={panelColors}
          until={until}
        />
        <Card
          title="Read Books"
          onClick={updateDateOnPost}
          values={values}
          pannelColors={panelColors}
          until={until}
        />
        <Card
          title="Drink 5L water"
          onClick={updateDateOnPost}
          values={values}
          pannelColors={panelColors}
          until={until}
        />
        <Card
          title="Cardio"
          onClick={updateDateOnPost}
          values={values}
          pannelColors={panelColors}
          until={until}
        />
        <Card
          title="Dance"
          onClick={updateDateOnPost}
          values={values}
          pannelColors={panelColors}
          until={until}
        />
      </div>
    </Container>
  );
}
