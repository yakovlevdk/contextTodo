export const useSortTodos = (todos, setTodos, setRefresh) => {
  const sortTodos = (event) => {
    event.preventDefault();
    const sortedTodos = [...todos].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setTodos(sortedTodos);
    setRefresh(true);
  };

  return {
    sortTodos,
  };
};
