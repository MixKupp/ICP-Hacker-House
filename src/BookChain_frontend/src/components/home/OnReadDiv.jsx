import React from "react";
import ProgressbarSection from "./ProgressbarSection";

function OnReadDiv(props) {
  return (
    <div
      key={props.index}
      className="min-w-[20rem] flex bg-white p-4 rounded-xl shadow"
    >
      <div class="w-[65px] h-[89px] aspect-auto">
        <img
          className="w-full h-full rounded-lg mb-2 flex-auto"
          src={props.url}
          alt=""
        />
      </div>
      <div className="flex-auto flex flex-col justify-between pl-4">
        <h3 className="font-semibold">{props.title}</h3>
       

        {/*  */}
       <ProgressbarSection />
      </div>
    </div>
  );
}

export default OnReadDiv;

// width 130 height 180