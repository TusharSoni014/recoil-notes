import { useSetRecoilState } from "recoil";
import { todoAtom } from "../store/atoms/todoAtom";
import { FormEvent, useState } from "react";

export default function AddTodo() {
  const addTodo = useSetRecoilState(todoAtom);
  const [todoInput, setTodoInput] = useState("");
  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo((prev) => [...prev, todoInput]);
    setTodoInput("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        type="text"
        placeholder="todo text"
        required
      />
      <button type="submit">add</button>
    </form>
  );
}
