import { useState } from "react";
import "../App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Hej");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          Hej
        </a>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-200 ml-5 px-6 py-3 text-[40px] rounded-md hover:bg-blue-400 "
        >
          Tryk på mig
        </button>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Indtast dit navn"
        ></input>
        <p>{name}</p>
      </div>
      <h1>Vite + React</h1>e
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
