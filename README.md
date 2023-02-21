# About

ReactHooks 기능들을 정리한 폴더.
App.js에 ReactRouter library를 사용하여 각각의 reacthooks 목록을 연결.

## useState

컴포넌트가 가질 수 있는 상태를 의미한다. 이 컴포넌트에서는 가상의 게임기를 만들고 게임을 시작할 수 있게해주는 coin을 useState로 만들어 사용하였다.

## useEffect

내가 작업한 특정 코드를 실행시키고 싶을 때 useEffect를 사용한다.

실행환경별 예제, dependency array 및 Clean Up 예제를 통해 알아보았다.

### useEffect 실행 환경

1. Mount (redering)

2. Update (re-rendering)

3. Unmount

## UseRef

useRef를 부르면 ref object를 반환해준다.

```
const ref = useRef(value)
```

ref object는 { current : value } 형태를 띄고있다.

인자로 넣어준 초기값은 ref 안에 있는 current에 저장이 된다.
ref object는 수정이가능해서 언제든 원하는 값으로 변경 가능하다.

```
{ current : 1 }
{ current : "hello" }
```

여기서 중요한 것은 반환된 ref는 컴포넌트가 무수히 많은 렌더링이 된다 하더라도 언마운트 되기 전 까지는 값을 그대로 유지한다는 것

### useState와 useRef의 차이점

- useRef에 할당된 값을 변경할 경우 즉시 변경된 값이 반영이 되고, useState에 할당된 값이 변경되는 시점은 re-rendering이 일어난 후 이다.

### useRef 특징

- 사용하는 컴포넌트 안에 자주 바뀌어야 하는 값을 useState를 사용한다면 값이 변경될 때 마다 rendering이 일어나게 되는데 이 값을 useRef에 할당한다면 값이 자주 바뀌어도 rendering이 일어나지 않기 때문에 값이 화면에 출력이 되지 않기를 원할 때 사용하기 유용하다.

- var나 let으로 선언한 변수의 값과 useRef의 값을 비교했을 때 해당 컴포넌트가 렌더링이 되는 시점에 var나 let으로 선언한 변수는 초기화 되지만 useRef의 값은 초기화되지 않는다.

- DOM 요소의 접근을 가능하게 해준다.
