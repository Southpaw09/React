import React from "react";
import Button from "./Button";

function ButtonBar(props) {
  return (
    <div>
      <Button buttonName="red" onClick={props.colorChange} />
      <Button buttonName="yellow" onClick={props.colorChange} />
      <Button buttonName="pink" onClick={props.colorChange} />
      <Button buttonName="green" onClick={props.colorChange} />
    </div>
  );
}

export default ButtonBar;
