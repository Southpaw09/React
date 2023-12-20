import Card from "./components/Card";

function App() {
  let newObj = {
    name: "Ayush",
    age: 25,
  };
  const newArr = [1, 2, 3, 4];
  return (
    <>
      <Card name="Ayush" />
      <Card name="Piyush" />
    </>
  );
}

export default App;
