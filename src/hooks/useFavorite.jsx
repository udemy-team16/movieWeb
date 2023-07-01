import { useEffect, useState } from "react";

const useFavorite = (id) => {
  const [likeArr, setLikeArr] = useState([]);
  const [like, setLike] = useState(false);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setLikeArr(favorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(likeArr));
  }, [likeArr]);

  useEffect(() => {
    setLike(likeArr.includes(id));
  }, [id, likeArr]);

  const handleLike = () => {
    if (like) {
      setLikeArr(likeArr.filter((itemId) => itemId !== id));
    } else {
      setLikeArr([...likeArr, id]);
    }
  };
  return { handleLike, like };
};

export default useFavorite;
