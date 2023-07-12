import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { updateMoviestore } from "../redux/MoviesStore";
import { useDispatch } from "react-redux";

const MovieList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // const socket = io("http://localhost:3001"); // 서버의 URL에 맞게 수정
  const dispatch = useDispatch(); 

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.data.movies);
        dispatch(updateMoviestore({ movies: data.data.movies }));
      });
    // socket.on("message", (message) => {
    //   setMessages((prevMessages) => [...prevMessages, message]);
    // });

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  // const handleSendMessage = () => {
  //   if (newMessage.trim() !== "") {
  //     const messageObject = {
  //       id: Date.now(),
  //       message: newMessage,
  //     };

  //     socket.emit("message", messageObject);
  //     setNewMessage("");
  //   }
  // };

  if (!list)
    return (
      <div className="spinnerWraps">
        <div className="spinner">
          <div className="spinner-inner" />
        </div>
      </div>
    );

  return (
    <div className="container">
      {list.map((list) => (
        <div className="movie" key={list.id}>
          <div
            className="imgs"
            onClick={() => {
              navigate(`/detailMovie/${list.id}`);
              const storedList = JSON.parse(localStorage.getItem("list")) || [];
            
              // 이미 저장된 항목인지 확인하여 중복을 방지합니다.
              const isDuplicate = storedList.some(item => item.id === list.id);
            
              if (!isDuplicate) {
                storedList.unshift(list);
                localStorage.setItem("list", JSON.stringify(storedList));
              }
            }}
          >
            <img src={list.medium_cover_image} alt="" />
            <div className="hover">
              <>
                {list.rating}/10
                {list.genres.map((item) => (
                  <div>{item}</div>
                ))}
              </>
            </div>
          </div>
          <div className="moveInfor">
            <p>
              <span style={{ fontWeight: "bold", color: "red" }}>
                ({list.language.toUpperCase()})
              </span>{" "}
              {list.title}
            </p>
            <p>{list.year}</p>
          </div>
        </div>
      ))}
      <div className="chatContainer">
        <div className="chatMessages">
          {messages.map((message, index) => (
            <div key={index} className="chatMessage">
              <span>{message.message}</span>
            </div>
          ))}
        </div>
        <div className="chatInput">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          {/* <button onClick={handleSendMessage}>Send</button> */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
