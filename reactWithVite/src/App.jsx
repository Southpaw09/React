import { useState } from "react";

function App() {
  useState();

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter(20);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <>
      <h3>{counter}</h3>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
