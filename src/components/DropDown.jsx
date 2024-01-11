import React from "react";

export default function DropDown({ typeList, setSelect }) {
  return (
    <div className="flex justify-between items-center p-5 py-10">
      <div className=" text-2xl font-bold ">Dydamic Dropdown</div>
      <select className=" text-xl w-[200px] p-2 px-4 border border-gray-100 rounded " onChange={(e) => setSelect(e.target.value)}>
        <option className=" p-4 " defaultValue="All">All</option>
        {typeList.map((t, index) => (
          <option className=" p-4 " key={index} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
