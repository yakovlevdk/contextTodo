import { useState } from "react";
import { debounce } from "lodash-es";
export const useSearchTodos = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [foundedItems, setFoundedItems] = useState([]);

  const handleSearch = debounce((search, todos) => {
    setIsSearching(true);
    const results = todos.filter((todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
    setFoundedItems(results);
  }, 300);

  const resetSearch = () => {
    setIsSearching(false);
    setFoundedItems([]);
  };

  return {
    isSearching,
    foundedItems,
    handleSearch,
    resetSearch,
  };
};
