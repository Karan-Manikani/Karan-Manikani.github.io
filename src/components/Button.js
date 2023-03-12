import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to={`/${props.text.toLowerCase()}`}>
      <div className="transition-colors cursor-pointer px-4 py-2 rounded-xl font-extralight hover:bg-darkGray hover:text-offWhite border border-darkGray dark:hover:bg-offWhite dark:hover:text-darkGray dark:border dark:border-offWhite">
        {props.text}
      </div>
    </Link>
  );
}

export default Button;
