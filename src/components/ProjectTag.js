import React from "react";

function ProjectTag(props) {
  function getColor(tagName) {
    let textColor;
    let bgColor;
    switch (tagName) {
      case "Frontend Development":
        textColor = "text-red-700";
        bgColor = "bg-red-200";
        return textColor + " " + bgColor;
      case "Backend Development":
        textColor = "text-blue-700";
        bgColor = "bg-blue-200";
        return textColor + " " + bgColor;
      case "Web Development":
        textColor = "text-green-700";
        bgColor = "bg-green-200";
        return textColor + " " + bgColor;
      case "Algorithms":
        textColor = "text-yellow-700";
        bgColor = "bg-yellow-200";
        return textColor + " " + bgColor;
      case "Machine Learning":
        textColor = "text-fuchsia-700";
        bgColor = "bg-fuchsia-200";
        return textColor + " " + bgColor;
      default:
        break;
    }
  }

  return <div className={`rounded-full ${getColor(props.tagName)} px-4 py-1 w-fit mr-2 mb-3`}>{props.tagName}</div>;
}

export default ProjectTag;
