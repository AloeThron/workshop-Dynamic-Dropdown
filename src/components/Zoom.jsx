import React from "react";

export default function Zoom(props) {

  return (
    <div className={props.vis}>
      <div className="h-screen w-screen z-10 fixed top-0 left-0">
        <div className="h-screen w-screen z-20 bg-gray-50 opacity-70 sticky inset-x-0 inset-y-0" onClick={() => {props.setVis("hidden")}}></div>
        <div>
          <img
            className="z-30 rounded-lg absolute inset-x-0 inset-y-0 m-auto max-h-[80%] max-w-[80%]"
            src={props.img}
            onClick={() => {props.setVis("hidden")}}
          />
        </div>
      </div>
    </div>
  );
}
