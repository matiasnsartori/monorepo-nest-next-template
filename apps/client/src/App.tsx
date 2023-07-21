import "./App.css";

function App() {
  const handleClick = async () => {
    const response = await fetch("/");
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <button onClick={handleClick}>click me</button>
    </>
  );
}

export default App;
