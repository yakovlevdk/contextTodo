import { useChangeTodo } from "../hooks/useChangeTodo";
import { useDeleteTodo } from "../hooks/useDeleteTodo";

export const TodoItem = ({ id, title, setRefresh, refresh }) => {
  
  const { changeValue, handleChangeInput, changeTodo } = useChangeTodo({
    setRefresh,
    refresh,
  });
  const { deleteTodo } = useDeleteTodo({ setRefresh, refresh });
  return (
    <li>
      <input
        type="text"
        value={changeValue[id] || title}
        onChange={(event) => handleChangeInput(id, event.target.value)}
      />
      <button onClick={() => changeTodo(id, changeValue[id] || title)}>
        Изменить
      </button>
      <button onClick={() => deleteTodo(id)}>Удалить</button>
    </li>
  );
};
