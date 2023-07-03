import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import "./DetailMovie.css";

const DetailMovie = () => {
  const [movie, setMovie] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigator = useNavigate();
  const params = useParams();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json`)
      .then((res) => res.json())
      .then((data) => {
        const filteredMovie = data.data.movies.find(
          (item) => item.id === Number(params.id)
        );
        setMovie(filteredMovie);
      });

      const socketInstance = io("http://localhost:3001"); // 웹소켓 서버 주소 설정
      setSocket(socketInstance);

      // socketInstance.on("message", (message) => {
      //   setMessages((prevMessages) => [...prevMessages, message]);
      // });
    
      return () => {
        socketInstance.disconnect(); // 웹소켓 연결 해제
      };
    }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      const message = {
        id: Date.now(),
        text: newMessage,
        time: currentTime,
      };
  
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage("");
  
      // 웹소켓을 통해 메시지 전송
      socket.emit("message", message);
    }
  };

  console.log(messages,newMessage)

  if (!movie)
    return (
      <div className="spinnerWraps">
        <div className="spinner">
          <div className="spinner-inner" />
        </div>
      </div>
    );

  return (
    <div className="detailMain" key={movie.id}>
      <div className="imgWrap">
        <img src={movie.medium_cover_image} alt="" />
        <button>다운로드</button>
        <button>Watch Now</button>
      </div>
      <div className="inforWrap">
        <p>{movie.title}</p>
        <p>
          {movie.year}
          <br />
          {movie.genres.map((item) => (
            <span style={{ marginRight: "10px" }}>{item}</span>
          ))}
        </p>
        <p>
          Available in: {movie.torrents[0].quality}&nbsp;
          {movie.torrents[1].quality}
        </p>
        <p>WEB: same quality as BluRay</p>
        <p>DownLoad</p>
        <p>😊 12</p>
        <p>😎 Certified Fresh 95% TOMATOMETER · 169</p>
        <p>🎉 Upright 64% AUDIENCE · 250 ratings</p>
        <p>✨ {movie.rating} / 10 2.5K</p>
        <button className="moveMain" onClick={() => navigator(-1)}>
          뒤로가기
        </button>
      </div>
      <div style={{marginLeft:"50px",color:"white"}}> 
        <h1>실시간 채팅</h1>
      <div id="chat-container">
      <div>
        {messages.map((message, index) => (
          <p key={index} style={{ color: message.color }}>
           {message.text} - {message.time}
          </p>
        ))}
      </div>
        </div>
        <div id="input-container">
          <input
            type="text"
            id="message-input"
            placeholder="메시지 입력"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button id="send-button" onClick={handleSendMessage}>
            전송
          </button>
        </div>
      </div>
      </div>
  );
};

export default DetailMovie;