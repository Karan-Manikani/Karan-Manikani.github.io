import React from "react";
import { Link } from "react-router-dom";

function ProjectBtn(props) {
  return (
    <Link to={`${props.hyperlink}`} target="_blank">
      <div className="transition-colors cursor-pointer mr-4 px-4 py-2 rounded-xl font-extralight hover:bg-darkGray hover:text-offWhite border border-darkGray flex justify-center items-center dark:hover:bg-offWhite dark:hover:text-darkGray dark:border dark:border-offWhite">
        {props.text}
      </div>
    </Link>
  );
}

export default ProjectBtn;
