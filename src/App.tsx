import { useState } from "react";
import Main from "./components/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-w-screen min-h-screen bg-neutral-very-light-gray font-rubik py-16 flex justify-center">
      <Main />
    </div>
  );
}

export default App;
