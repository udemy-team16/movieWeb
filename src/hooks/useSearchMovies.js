import React, { useState } from 'react';

const useSearchMovies = (prev) => {
  const [searchText, setSearchText] = useState(prev);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }
  const searchFilter = (list, val) => {
    return list.filter(item => item.title.toLowerCase().includes(val))
  }
  return { searchText, handleChange, searchFilter }
};

export default useSearchMovies;