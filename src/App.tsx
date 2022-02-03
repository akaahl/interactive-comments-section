import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen bg-teal-200">
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
    </div>
  );
}

export default App;
