/*
useRef와 useState의 차이점, 
1. useState : state의 값이 변화할때마다 rendering이 된다.
2. useRef : ref의 값이 변화하더라도 rendering이 되지 않는다.

컴포넌트 안의 변수와 useRef의 차이점
1. 
*/
import { useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let myVariable = 0;

  console.log("countRef =", countRef);

  const increaseCount = () => {
    setCount(count + 1);
    console.log("stateRendering");
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("countRef =", countRef.current);
  };

  const increaseVariable = () => {
    myVariable = myVariable + 1;
    console.log("myVariable = ", myVariable);
  };

  return (
    <div className="useRef-wrraper">
      <p>COUNT : {count}</p>
      <p>countRef : {countRef.current}</p>
      <p>myVariable : {myVariable}</p>
      <button onClick={increaseCount}>COUNT 증가</button>
      <button onClick={increaseCountRef}>countRef 증가</button>
      <button onClick={increaseVariable}>myVaribale 증가</button>
    </div>
  );
};

export default UseRef;
