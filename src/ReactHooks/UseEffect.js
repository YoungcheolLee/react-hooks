import { useState, useEffect } from "react";

const UseEffect = () => {
  const [text, setText] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setText((prevState) => {
      return [input, ...prevState];
    });
  };

  const handleInputChange = (e) => {
    return setInput(e.target.value);
  };

  return (
    <div>
      <div className="useEffect">
        <span>
          <h2>▣ useEffect 란? </h2>
          <br />
          ● 어떠한 컴포넌트가 Mount(렌더링) 되거나 Update(리 렌더링) 되거나
          Unmount(화면에서 사라짐) 되었을 때<br />
          ● 내가 원하는 기능을 실행시키고 싶을 때 사용한다. <br />
          ● 바로 예제를 통해 useEffect 기능을 사용해보자. <br />
          <br />
          <br />
          ◎ 상황예제 <br />
          ● text를 입력받는 필드를 만들고 "저장" 버튼을 눌렀을 때만 console에
          저장 기능이 실행이 되는지 확인해 보도록 하자. <br />
          <br />
        </span>
        <br />
        <hr />
        <div>
          <input type="text" value={input} onChange={handleInputChange}></input>
          <button onClick={handleSubmit}>저장</button> <br />
          <div>
            <h3>입력받은 내용들</h3>
            <div>
              {text.map((item, idx) => {
                return <div key={idx}>{input}</div>;
              })}
            </div>
          </div>
          <br />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
