import { useState, useCallback, useEffect } from "react";
function App() {
  const [password, setPassword] = useState("");
  const passwordGenerator = () => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  };
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };
  useEffect(passwordGenerator, []);
  return (
    <div className=" text-center text-white">
      <div className="bg-gray-800 w-[800px] h-[500px]">
        <h3>Password Generator</h3>
        <div className="flex justify-center align-middle px-4 py-2">
          <input
            type="text"
            placeholder="password"
            value={password}
            readOnly
            className="rounded mx-2 text-orange-400 p-2"
          />
          <button
            className="bg-blue-950 px-3 py-1 outline-none rounded-md shadow-md"
            onClick={passwordGenerator}
          >
            Generate
          </button>
          <button
            className="bg-blue-950 px-3 py-1 outline-none rounded-md shadow-md"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
