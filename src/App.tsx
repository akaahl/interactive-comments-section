import { useState } from "react";
import Main from "./components/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-w-screen flex min-h-screen justify-center bg-neutral-very-light-gray py-16 font-rubik">
      <Main />
    </div>
  );
}

export default App;
