/*
useRef와 useState의 차이점, 
1. useState : state의 값이 변화할때마다 rendering이 된다.
2. useRef : ref의 값이 변화하더라도 rendering이 되지 않는다.

컴포넌트 안의 변수와 useRef의 차이점
 - 렌더링 시점에 변수 > 데이터 초기화 / useRef > 데이터 유지
*/

import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let myVariable = 0;
  const inputRef = useRef();

  // rendering 시 inputRef DOM요소에 자동으로 포커스되는 기능 추가
  useEffect(() => {
    console.log("inputRef :", inputRef);
    inputRef.current.focus();
  }, []);

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

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      return handleLogin();
    }
  };

  const handleLogin = () => {
    if (inputRef.current.value.length < 1) {
      alert("ID를 입력해주세요!");
    } else {
      alert(`${inputRef.current.value}님 환영합니다!`);
    }
  };

  return (
    <div className="useRef-wrraper">
      <h3>React Hook - useRef</h3>
      <hr />
      <p>COUNT : {count}</p>
      <p>countRef : {countRef.current}</p>
      <p>myVariable : {myVariable}</p>
      <div className="useRef-button">
        <button onClick={increaseCount}>COUNT 증가</button>
        <button onClick={increaseCountRef}>countRef 증가</button>
        <button onClick={increaseVariable}>myVaribale 증가</button>
      </div>
      <hr />
      <div className="useRef-login">
        <h3>useRef를 사용해 DOM요소 접근</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="ID를 입력해주세요"
          onKeyUp={onCheckEnter}
        />
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
};

export default UseRef;
