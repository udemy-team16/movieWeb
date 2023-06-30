import { useEffect, useState } from "react";

export function useFetch(url) {
  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setResponseData(json));
    } catch (error) {
      setErrorMsg(error);
    }
  }, [url]);

//   const fetchData = async () => {
//     try {
//       await fetch(url)
//         .then((res) => res.json())
//         .then((json) => setResponseData(json));
//     } catch (error) {
//       setErrorMsg(error);
//     }
//   };
  //   fetchData();
  return { loading, responseData, errorMsg };
}
