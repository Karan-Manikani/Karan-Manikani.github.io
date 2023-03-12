import React from "react";
import { Link } from "react-router-dom";

function HeaderBtn(props) {
  return (
    <Link to={`/${props.text.toLowerCase()}`}>
      <div className="hover:bg-darkGray hover:text-offWhite dark:hover:bg-offWhite dark:hover:text-darkGray transition-colors cursor-pointer px-4 py-2 rounded-full font-extralight">
        {props.text}
      </div>
    </Link>
  );
}

export default HeaderBtn;
