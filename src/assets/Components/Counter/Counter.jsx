import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <button onClick={() => setCount((count) => count - 1)}></button>
         {count} Likes
        <button onClick={() => setCount((count) => count + 1)}></button>
      </div>
    </>
  );
}

export default Counter;
