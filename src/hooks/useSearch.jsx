import React, { useEffect, useState } from "react";

const useSearch = (searchKeyword, basicData) => {
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    setSearchData(
      basicData?.data.movies.filter((data) =>
        data.title.includes(searchKeyword)
      )
    );
  }, [searchKeyword, basicData]);

  return { searchData, setSearchData };
};

export default useSearch;
