import React from "react";
import ResumeHeading from "./ResumeHeading";

function Education() {
  return (
    <div className="flex flex-row justify-between">
      <ResumeHeading heading="Education" />
      <div className="flex flex-row justify-between w-7/12">
        <p className="font-light">2020 - 2024</p>
        <div className="w-3/4">
          <h4 className="mb-4">
            NMIMS University, Mumbai
            <br />
            <span className="font-light">B.Tech in Computer Science (Artificial Intelligence)</span>
            <br />
            <span className="font-light">GPA - 3.67 / 4 </span>
          </h4>
          <p className="mb-2">
            Relevant coursework
            <ul className="font-light">
              <li>Deep learning</li>
              <li>Machine learning</li>
              <li>Operating systems</li>
              <li>Computer networks</li>
              <li>Data structures & algorithms</li>
              <li>Natural language processing</li>
              <li>Object oriented programming</li>
              <li>Database management systems</li>
              <li>Introduction to artificial intelligence</li>
              <li>Computer organization & architecture</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
