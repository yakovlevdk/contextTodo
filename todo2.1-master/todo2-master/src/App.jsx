import { useEffect, useState } from "react";
import "./App.css";
import { TodoItem } from "./Components/TodoItem";
import { AddTodoForm } from "./Components/AddTodoForm";
import { SearchForm } from "./Components/SeachForm";
import { useSearchTodos } from "./hooks/useSearchTodos";
import { useSortTodos } from "./hooks/useSortTodos";
import { AppContext } from "./context";
function App() {
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [addTodo, setAddTodo] = useState("");

  const { isSearching, foundedItems, handleSearch, resetSearch } =
    useSearchTodos();
  const { sortTodos } = useSortTodos(todos, setTodos, setRefresh);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((item) => item.json())
      .then((todo) => {
        setTodos(todo);
      });
  }, [refresh]);

  return (
    <>
      <AppContext.Provider
        value={{
          todos,
          setTodos,
          refresh,
          setRefresh,
          addTodo,
          setAddTodo,
          handleSearch,
          resetSearch,
        }}
      >
        <div className="inf">
          <h1>Список дел</h1>
          <AddTodoForm />
          <SearchForm />

          <button onClick={(event) => sortTodos(event)}>Сортировать</button>
        </div>

        <div className="todo-list">
          <ul>
            {!isSearching &&
              todos.map(({ id, title }) => (
                <TodoItem key={id} id={id} title={title} />
              ))}

            {isSearching &&
              foundedItems.map(({ id, title }) => <li key={id}>{title}</li>)}
          </ul>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
