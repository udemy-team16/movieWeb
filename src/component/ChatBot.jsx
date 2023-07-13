import React, { useState,useEffect,useRef } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isModal, setIsModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);
  const [isShow,setIsShow] = useState(false);

  const handleButtonClick = (text) => {
    const newMessage = {
      question: text,
      answer: '',
      id:Date.now()
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTimeout(() => {
      let newAnswer = '';
      switch (text) {
        case '안녕하세요':
          newAnswer = '안녕하세요! 어떤 도움이 필요하신가요?';
          break;
        case '오늘 날씨는 어때요?':
          newAnswer = '현재 온도는 25°C이며 맑은 날씨입니다.';
          break;
        case '뉴스 보여주세요.':
          newAnswer = '오늘의 뉴스 헤드라인은 "경제 성장률이 3% 상승, 주식 시장에 긍정적 영향"입니다.';
          break;
        case '교통 정보 알려주세요.':
          newAnswer = '현재 서울 지하철 2호선은 정상 운행 중이며 도로 교통은 혼잡합니다.';
          break;
        case 'FAQ':
          newAnswer = '자주 묻는 질문에 대한 답변을 준비 중입니다.';
          break;
        case '도움말':
          newAnswer = '챗봇 사용 방법과 기능에 대한 도움말입니다.';
          break;
        default:
          newAnswer = '죄송합니다. 해당 기능은 준비 중입니다.';
      }

      setMessages((prevMessages) => {
        const updatedMessages = prevMessages.map((msg) => {
          if (msg.question === text) {
            return { ...msg, answer: newAnswer };
          }
          return msg;
        });
        return updatedMessages;
      });
    }, 2000);
  };



  useEffect(() => {
    // 메시지가 추가될 때마다 스크롤을 맨 아래로 이동
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

console.log(messages)
  return (
    <>
      <div className="chatbot">
        {!isModal && <img src="/다운로드asds.jpg" alt="asds" onClick={() => setIsModal(true)} />}
      </div>
      {isModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="area"  ref={messageContainerRef}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="closeBtn" onClick={() => {setIsModal(false);setMessages([]);setIsShow(false)}}>x</button>
              </div>
              <div>
                <div>
                 <p>안녕하세요</p>
                 <p>무엇을 도와드릴까요?</p>
                </div>
                <div className="quarea">
                <button onClick={() => handleButtonClick('안녕하세요')}>인사</button>
                    <button onClick={() => handleButtonClick('오늘 날씨는 어때요?')}>날씨정보</button>
                    <button onClick={() => handleButtonClick('뉴스 보여주세요.')}>뉴스</button>
                    <button onClick={() => handleButtonClick('교통 정보 알려주세요.')}>교통 정보</button>
                    <button onClick={() => handleButtonClick('FAQ')}>FAQ</button>
                    <button onClick={() => handleButtonClick('도움말')}>도움말</button>
                    <button onClick={() => {setIsModal(false);setMessages([])}}>나가기</button>
                </div>
              </div>
              {messages.length>0&&<div className="message-container">
                {messages.map((msg) => (
                  <div key={msg.id} className="message">
                    <p style={{textAlign:"right"}}>{msg.question}</p>
                    {msg.answer && <div style={{textAlign:"left"}}>
                    <p>{msg.answer}</p>
                    </div>}
                  </div>
                ))}
                
              </div>
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;