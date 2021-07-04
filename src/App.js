import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [element, setElement] = useState("");
  const [userCount, setUserCount] = useState("");

  useEffect(() => {
    axios.get("/api/user/test").then((response) => {
      if(response.data) {
        setElement(response.data);
      } else {
        setElement("연결 실패!");
      }
    });

    axios.get("/api/user/getUserCount").then((response) => {
      if(response.data) {
        setUserCount(response.data + " 명");
      } else {
        setUserCount("연결 실패!");
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          리액트 스프링부트 연동 테스트
          <br/>
          <span>서버와 연결되면 "Hi"가 노출됩니다.</span>
          <h1>{element}</h1>
          <br/>
          <span>DB와 연결되면 회원수가 노출됩니다.</span>
          <h1>{userCount}</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
