import "./App.css";

function App() {
  const handleClick = async () => {
    const response = await fetch("/api");
    const data = await response.text();
    console.log(data);
  };

  return (
    <>
      <button onClick={handleClick}>click me</button>
    </>
  );
}

export default App;
