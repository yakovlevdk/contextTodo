import { useContext } from "react";
import { AppContext } from "../context";

export const useDeleteTodo = () => {
  const { refresh, setRefresh } = useContext(AppContext);
  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((it) => it.json())
      .then((data) => {
        setRefresh(!refresh);
        console.log(data);
      });
  };

  return { deleteTodo };
};
