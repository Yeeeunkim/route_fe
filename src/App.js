import React, { useState, useEffect } from 'react';
import Header from './common/Header';
import Content from './main/Content';
import './css/Main.css';
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
    <div className="main">

      <Header/>
      <Content/>
      
    </div>
    
  );
}

export default App;
