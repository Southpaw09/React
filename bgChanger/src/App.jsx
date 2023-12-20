import "./App.css";
import { useState } from "react";
import ButtonBar from "./components/ButtonBar";

function App() {
  const [color, setColor] = useState("olive");
  const colorChange = (e) => {
    console.log(e.target.innerText);
    setColor(e.target.innerText);
  };
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <ButtonBar colorChange={colorChange} />
    </div>
  );
}

export default App;
