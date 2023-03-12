import React from "react";
import Button from "../components/Button";
import placeholder from "../placeholder.jpg";

function HomeScreen() {
  return (
    <div className="flex flex-row mt-20 w-2/3 mx-auto justify-center fadein">
      <div className=" basis-2/5">
        <img className="h-80 w-80 rounded-full" src={placeholder} alt="Profile pic" />
      </div>
      <div className="basis-2/6 flex flex-col justify-center">
        <h2 className="font-bold text-7xl mb-5">Hello</h2>
        <h3 className="font-bold text-xl mb-2">A Bit About Me</h3>
        <p className="mb-5 tracking-wide font-light text-justify">
          Collaborative computer science student with an everlasting hunger to learn new trends and create meaningful
          projects to help the community. Passionate about machine learning and web development.
        </p>
        <div className="flex flex-row justify-between w-full">
          <Button text="Resume" />
          <Button text="Projects" />
          <Button text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
