import React from "react";
import ResumeHeading from "./ResumeHeading";

function Awards() {
  return (
    <div className="flex flex-row justify-between">
      <ResumeHeading heading="Achievements" />
      <div className="flex flex-row justify-between w-7/12">
        <p></p>
        <div className="flex flex-col w-3/4">
          <p className="mb-2">
            Winner of GDSC Codewars 2021 -{" "}
            <span className="font-light">A coding competition held by the GDSC Committee at NMIMS.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Awards;
