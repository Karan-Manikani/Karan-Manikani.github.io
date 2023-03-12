import React from "react";
import ProjectBtn from "./ProjectBtn";
import ProjectTag from "./ProjectTag";

function Project(props) {
  return (
    <div>
      <h3 className="font-bold text-xl mb-1">{props.title}</h3>
      <div className="flex flex-row">
        <div className=" basis-7/12">
          <p className="font-light mb-6">{props.description}</p>
          <p className="mb-6">
            Technologies used - <span className="font-light">{props.technologies.join(", ")}</span>
          </p>
          <div className="font-light mb-4 flex flex-row flex-wrap">
            {props.tags.map((tag) => (
              <ProjectTag key={tag} tagName={tag} />
            ))}
          </div>
          <div className="flex flex-row mb-20">
            <ProjectBtn text="Github" hyperlink={props.github} />
            {props.website && <ProjectBtn text="Live Website" hyperlink={props.website} />}
          </div>
        </div>
        <div className="basis-2/5 pl-8">
          <img
            className=" w-[400px] h-[210px] rounded-lg border border-darkGray border-opacity-50 dark:border-offWhite dark:border-opacity-50"
            src={props.image}
            alt="Project thumbnail"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
