import React from "react";
import ResumeHeading from "./ResumeHeading";

function Skills() {
  return (
    <div className="flex flex-row justify-between">
      <ResumeHeading heading="Skills" />
      <div className="flex flex-row justify-between w-7/12">
        <p></p>
        <div className="flex flex-col w-3/4">
          <p className="mb-4">
            Languages - <span className="font-light">Python, JavaScript, Java, C++, SQL, Octave/MATLAB</span>
          </p>
          <p className="mb-4">
            Libraries -{" "}
            <span className="font-light">
              TensorFlow, NumPy, Scikit Learn, Pandas, React.js, Node.js, Express, FastAPI
            </span>
          </p>
          <p className="mb-2">
            Developer Tools -{" "}
            <span className="font-light">
              Git, GitHub, Google Colab, Jupyter, MongoDB, MySQL, PostgreSQL, Postman, Android Studio, Heroku, Vercel
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
