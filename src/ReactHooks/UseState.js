import { useState } from "react";

const UseState = () => {
  // 코인 상태를 컨트롤할 coin, setCoin useState 생성
  const [coin, setCoin] = useState(0);

  // 게임 시작 버튼 컨트롤할 use State
  const [disable, setDisable] = useState(true);

  const handleCoinPlus = () => {
    return setCoin(coin + 1) + setDisable(!true);
  };

  const handleStartBtn = () => {
    if (coin === 0) {
      return setDisable(true);
    } else {
      setCoin(coin - 1);
    }
  };

  return (
    <div className="useState">
      <span>
        <h2>▣ useState 란? </h2>
        <br />
        <br />
        ● 어떠한 값이 변화하는 상태(state)를 의미한다. <br />
        ● 그렇다면 예제를 통해 상태(state)를 어떻게 관리하는지 알아보자. <br />
        <br />
        ◎ 상황예제 <br />
        ● 게임을 하기 위해 동네에 있는 "감자 오락실" 에 들려 게임을 하려한다.
        <br />● 동전을 넣어 게임을 시작해보자. (동전이 없으면 게임시작 버튼
        비활성화) <br />
      </span>
      <br />
      <hr />
      <div>
        <h4>[ ### The KingOfFighter Game ### ]</h4>
        <button disabled={disable} onClick={handleStartBtn}>
          {" "}
          GameStart !!
        </button>
        <h4>동전수량 : {coin}</h4>
        <button onClick={handleCoinPlus}> 동전넣기 </button>
      </div>
      <br />
      <hr />
      <br />
      <span>
        위 예제에서 상태(state)를 변화할 값엔 무엇이 있을까? <br />
        <br />
        첫번째로 동전과 게임시작 버튼 이다. <br />
        <br />
        코인을 넣어야 게임이 시작버튼이 활성화가 되고, 동전이 0개가 되면 다시
        게임시작 버튼은 비활성화 된다. <br />
        <br />
        코드를 살펴보면 동전 수량 상태를 변경해줄 useState로 [coin, setCoin]을
        생성하였고 <br />
        <br />
        게임시작 버튼 상태를 변경해줄 useState로 [disable, setDisable]을
        생성하여 <br />
        <br />
        handleCoinPlus, handleStartBtn 함수에 조건을 걸어 상태(state)를
        변경해주었다. <br />
        <br />
        이처럼 ReactHook의 useState는 상태(state)를 변경해주는 기능을
        담당하고있다.
      </span>
    </div>
  );
};

export default UseState;
