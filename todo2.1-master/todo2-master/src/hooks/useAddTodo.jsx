import { useContext } from "react";
import { AppContext } from "../context";

export const useAddTodo = () => {
  const { refresh, setRefresh } = useContext(AppContext);
  const addTodo = (event, { addTodo }) => {
    event.preventDefault();
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: `${addTodo}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefresh(!refresh);
      });
  };

  return { addTodo };
};
