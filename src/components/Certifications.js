import React from "react";
import Certification from "./Certification";
import ResumeHeading from "./ResumeHeading";

function Certifications() {
  return (
    <div className="flex flex-row justify-between">
      <ResumeHeading heading="Certifications" />
      <div className="w-7/12">
        <Certification
          date="Jan-2021"
          platform="Coursera"
          title="Introduction to Python Programming"
          organization="University of Michigan"
        />
        <Certification
          date="Nov-2021"
          platform="Coursera"
          title="Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization"
          organization="DeepLearning.AI"
        />
        <Certification
          date="Nov-2021"
          platform="Coursera"
          title="Neural Networks and Deep Learning"
          organization="DeepLearning.AI"
        />
        <Certification
          date="Nov-2021"
          platform="Coursera"
          title="Structuring Machine Learning Projects"
          organization="DeepLearning.AI"
        />
        <Certification
          date="Apr-2022"
          platform="LinkedIn"
          title="HTML Essential Training"
          organization="LinkedIn Learning"
        />
        <Certification
          date="Jul-2022"
          platform="SVKM's NMIMS"
          title="Java Programming"
          organization="NMIMS University"
        />
      </div>
    </div>
  );
}

export default Certifications;
