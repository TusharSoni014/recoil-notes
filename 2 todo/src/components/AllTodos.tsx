import { useRecoilValue } from "recoil";
import { filteredTodos } from "../store/selectors/filteredTodoSelector";

export default function AllTodos() {
  const filteredTodosList = useRecoilValue(filteredTodos);

  return (
    <div className="filtered_todos">
      {filteredTodosList.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </div>
  );
}
