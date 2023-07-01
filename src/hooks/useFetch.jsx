import { useEffect, useState } from "react";

export function useFetch(url) {
  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setLoading(true); // 데이터 가져오는 동안 로딩 상태를 설정

    try {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setResponseData(json);
          setLoading(false); // 데이터 가져오기가 완료되었으므로 로딩 상태를 해제
        })
        .catch((error) => {
          setErrorMsg(error);
          setLoading(false);
        });
    } catch (error) {
      setErrorMsg(error);
      setLoading(false);
    }
  }, [url]);

  return { loading, responseData, errorMsg };
}
