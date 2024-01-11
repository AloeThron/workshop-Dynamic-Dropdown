import React from "react";

export default function card(props) {
  return (
    <div>
      <div className="w-[300px] bg-white shadow-md border border-gray-200 rounded-lg max-w-xs lg:max-w-sm">
        <img
          className="h-80 w-full rounded-t-lg bg-cover bg-center"
          src={props.url}
        />
        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {props.type}
          </h5>
          <p className="font-normal text-gray-700 mb-3">
            Lorem ipsum dolor sit consectetur, adipisicing elit. Cupiditate eligendi labore officia totam tenetur modi, a, culpa nobis quos omnis illo.
          </p>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            onClick={() => {
              props.setVis("");
              props.setImg(props.url);
            }}
          >
            Zoom
          </button>
        </div>
      </div>
    </div>
  );
}
