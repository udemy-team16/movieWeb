import React, { useEffect, useState } from 'react';
import "./List.css"

const List = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
      const storedList = JSON.parse(localStorage.getItem("list"));
      setItem(storedList);
    }, []);

    if (!item) {
      return (
        <div className="list">
          <h2>최근 본 상품이 없습니다.</h2>
        </div>
      );
    }

    return (
      <div className="list">
        <h2>최근 본 상품</h2>
        {item.map((item) => (
          <div className="listinfo" key={item.id}>
            <img src={item.medium_cover_image} alt="이미지" />
          </div>
        ))}
      </div>
    );
};

export default List;