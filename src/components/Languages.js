import React from "react";
import ResumeHeading from "./ResumeHeading";

function Languages() {
  return (
    <div className="flex flex-row justify-between">
      <ResumeHeading heading="Languages" />
      <div className="flex flex-row justify-between w-7/12">
        <p></p>
        <div className="flex flex-col w-3/4">
          <p className="mb-4">
            English - <span className="font-light">Full working proficiency</span>
          </p>
          <p className="mb-4">
            Hindi - <span className="font-light">Full working proficiency</span>
          </p>
          <p className="mb-2">
            German - <span className="font-light">A2 Level</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Languages;
