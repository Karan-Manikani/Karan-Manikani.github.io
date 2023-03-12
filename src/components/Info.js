import React from "react";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";

function Info(props) {
  return (
    <div className="tracking-wide">
      <p className="text-lg font-bold">{props.title}</p>
      {props.value ? (
        <p className="font-light">{props.value}</p>
      ) : (
        <div className="flex flex-row text-2xl">
          <Link to={"https://github.com/Karan-Manikani"} target="_blank">
            <GrGithub className="mr-3" />
          </Link>
          <Link to={"https://www.linkedin.com/in/karan-manikani/"} target="_blank">
            <GrLinkedinOption />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Info;
