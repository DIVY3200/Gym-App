import React from "react";
import img1 from "../assets/img/img1.jpeg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpeg";
import TrainerCard from "../layouts/TrainerCard";

const Trainers = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center mt-10">Our Trainers</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
        <TrainerCard img={img1} name="Divyansh" />
        <TrainerCard img={img2} name="Harikesh" />
        <TrainerCard img={img3} name="Vikrant" />
      </div>
    </div>
  );
};

export default Trainers;
