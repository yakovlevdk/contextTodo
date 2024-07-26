import { AppContext } from "../context";
import { useAddTodo } from "../hooks/useAddTodo";
import { useContext } from "react";
export const AddTodoForm = () => {
  const { addTodo, setAddTodo } = useContext(AppContext);

  const { addTodo: addTodoHandler } = useAddTodo();

  return (
    <form>
      <input
        type="text"
        value={addTodo}
        onChange={(event) => setAddTodo(event.target.value)}
        placeholder="Добавить"
      />
      <button onClick={(event) => addTodoHandler(event, { addTodo })}>
        Добавить
      </button>
    </form>
  );
};
