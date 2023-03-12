import React from "react";
import Skills from "../components/Skills";
import Awards from "../components/Awards";
import Languages from "../components/Languages";
import Education from "../components/Education";
import PageHeading from "../components/PageHeading";
import Certifications from "../components/Certifications";

function ResumeScreen() {
  return (
    <div className="w-2/3 mx-auto mt-20 fadein">
      <PageHeading title="Resume" />
      <Education />
      <hr className="mt-6 mb-8 border border-darkGray border-opacity-10 dark:border-offWhite dark:border-opacity-10" />
      <Skills />
      <hr className="mt-6 mb-8 border border-darkGray border-opacity-10 dark:border-offWhite dark:border-opacity-10" />
      <Awards />
      <hr className="mt-6 mb-8 border border-darkGray border-opacity-10 dark:border-offWhite dark:border-opacity-10" />
      <Certifications />
      <hr className="mt-6 mb-8 border border-darkGray border-opacity-10 dark:border-offWhite dark:border-opacity-10" />
      <Languages />
    </div>
  );
}

export default ResumeScreen;
