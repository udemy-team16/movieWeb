import React, { useState } from 'react';

const useLikeHook = (likeList) => {
  const [like, setLike] = useState(likeList);

  const unlike = (id) => {
    if (like.includes(id)) {
      const removeLikeId = like.filter((item) => item !== id);
      localStorage.setItem('likeList', JSON.stringify(removeLikeId));
      setLike(removeLikeId);
    } else {
      const newLikeList = [...like, id];
      localStorage.setItem('likeList', JSON.stringify(newLikeList));
      setLike(newLikeList);
    }
  }

  return { like, unlike }
};

export default useLikeHook;