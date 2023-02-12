import { useState, useEffect } from "react";

const UseEffect = () => {
  let [count, setCount] = useState(0);
  const [doodle, setDoodle] = useState("");

  //Unmount Example State
  const [isVisible, setIsvisible] = useState(false);

  //toggle 함수 : toggle 함수 실행 시 isVisible이 true로 바뀜
  const toggle = () => {
    setIsvisible(!isVisible);
  };

  //Unmount 함수 추가
  const Unmount = () => {
    useEffect(() => {
      console.log("mount!");

      //Unmount 시점에 실행되는 코드
      return () => {
        console.log("Unmount!");
      };
    }, []);

    return <div>Unmount Component</div>;
  };

  useEffect(() => {
    console.log("useEffect 실행!");
  }, []);

  return (
    <div>
      <div>
        <span>count : {count} </span> <br />
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
        <div style={{ marginBottom: 50 }}>
          <span>{doodle}</span>
        </div>
        <br />
        <div>
          <h2>
            useEffect - Clean up 예제 <br />
            toggle button
          </h2>
          <button onClick={toggle}> ON / OFF </button>
          <h4>{isVisible && <Unmount />} </h4>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
