import React from "react";

function BookDiv(props) {
    const title = props.title.substring(0, 13) + " ...";

  return (
    <div>
      <div class={`w-[130px] h-[180px] aspect-auto ${props.className}`}>
        <img
          className="w-full h-full rounded-lg mb-2 flex-auto"
          key={props.id}
          src={props.url}
          alt={props.title}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p className="text-sm text-gray-500" >{props.author}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default BookDiv;