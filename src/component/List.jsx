import React  from 'react';
import "./List.css"
import { useNavigate } from 'react-router-dom';

const List = () => {
   const item = JSON.parse(localStorage.getItem("list"));
   const navigate = useNavigate();

    if (!item) {
      return (
        <div className="list">
          <h2>최근 본 상품이 없습니다.</h2>
        </div>
      );
    }

    console.log(item)
    return (
      <div className="list">
        <h2>최근 본 상품</h2>
        {item.map((item) => (
          <div className="listinfo" key={item.id} onClick={()=>navigate(`/detailMovie/${item.id}`)}>
            <img src={item.medium_cover_image} alt="이미지" />
          </div>
        ))}
      </div>
    );
};

export default List;