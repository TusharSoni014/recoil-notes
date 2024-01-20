import { useRecoilValue } from "recoil";
import Buttons from "./Buttons";
import { evenSelector } from "../store/selector/evenSelector";

export default function Count() {
  const count = useRecoilValue(evenSelector);
  return (
    <div>
      Count: {count}
      <Buttons />
      {count === 0 ? "It is even" : null}
    </div>
  );
}
