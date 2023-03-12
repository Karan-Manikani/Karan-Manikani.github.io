import React from "react";

function Certification(props) {
  return (
    <div className="flex flex-row justify-between mb-2">
      <p></p>
      <div className="w-3/4">
        <p>
          {props.title}
          <br />
          <span className="font-light">
            {props.platform} <br /> Issued {props.date}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Certification;
