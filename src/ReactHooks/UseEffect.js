import { useState, useEffect } from "react";

const UseEffect = () => {
  let [count, setCount] = useState(0);
  const [doodle, setDoodle] = useState("");

  // dependency array에 doodle을 넣어 doodle이 변경될 때 useEffect를 실행시켜 줌.
  // count 변화 시 useEffect 실행되지 않는다.
  useEffect(() => {
    console.log("useEffect 실행!");
  }, [doodle]);

  return (
    <div>
      <div>
        <span>버튼을 누른 횟수 : {count}</span> <br />
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
        <button onClick={() => setCount((count = 0))}> reset! </button>
      </div>
      <div>
        <input
          type="text"
          value={doodle}
          onChange={(e) => setDoodle(e.target.value)}
        />
        <br />
        <span>{doodle}</span>
      </div>
    </div>
  );
};

export default UseEffect;
