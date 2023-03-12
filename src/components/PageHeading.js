import React from "react";

function PageHeading(props) {
  return (
    <div>
      <h2 className=" text-5xl font-bold mb-1 tracking-wide">{props.title}</h2>
      <p className=" font-light mb-6">{props.subtitle}</p>
    </div>
  );
}

export default PageHeading;
