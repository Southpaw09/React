import React from "react";

function Button(props) {
  //   console.log(buttonName);
  console.log(props);

  return (
    <button
      className="rounded-md px-3 py-1 outline-none text-black m-2"
      onClick={props.onClick}
      style={{ backgroundColor: props.buttonName }}
    >
      {props.buttonName}
    </button>
  );
}

export default Button;
