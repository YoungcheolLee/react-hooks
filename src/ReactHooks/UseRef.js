import { useRef, useState } from "react";

const UseRef = () => {
  const inputName = useRef();
  const introduceInput = useRef();
  const [name, setName] = useState({ name: "", introduce: "" });

  const handleInputChange = (e) => {
    if(name.inputName.length < 1) {
      alert("이름을 입력해주세요!");
      inputName.current.focus();
      return;
    }

    if (name.introduce.length < 1) {
      alert("자기소개를 입력해주세요!");
      introduceInput.current.focus();
      return;
    }

    alert("저장성공!");
  }

  return (
    <div>
      This is UseRef Page
      <div>
        <input ref="name" value={name} placeholder={"이름을 입력해주세요!"} onChange={handleInputChange}} />
      </div>
    </div>
  );
};

export default UseRef;
