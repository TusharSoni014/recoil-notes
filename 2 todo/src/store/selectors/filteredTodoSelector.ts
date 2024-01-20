import { selector } from "recoil";
import { todoAtom } from "../atoms/todoAtom";
import { filterAtom } from "../atoms/filterAtom";

export const filteredTodos = selector({
  key: "filteredTodos",
  get: ({ get }) => {
    const todos = get(todoAtom);
    const filterText = get(filterAtom);
    const filteredTodosList = todos.filter((todo) => todo.includes(filterText));
    return filteredTodosList;
  },
});
