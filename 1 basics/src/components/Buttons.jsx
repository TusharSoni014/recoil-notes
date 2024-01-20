import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

export default function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  //or only to set the value
  // const setCountVal = useSetRecoilState(countAtom);
  
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
