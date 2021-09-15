import React, { useState, useEffect } from 'react';
import Header from './common/Header';
import Content from './main/Content';
import './css/Main.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import joinForm from './components/views/joinForm/joinForm.js';
import menubar from './components/views/common/menubar.js';


function App() {
  const [element,  setElement] = useState("");
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
<<<<<<< HEAD
    <div className="main">

      <Header/>
      <Content/>
      
    </div>
    
=======
    <Router>
    <div>
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path="/joinForm" component={joinForm} />
        <Route exact path="/menubar" component={menubar} />
        <p>
            리액트 스프링부트 연동 테스트
            <br/>
            <span>서버와 연결되면 "Hi"가 노출됩니다.</span>
            <h1>{element}</h1>
            <br/>
            <span>DB와 연결되면 회원수가 노출됩니다!!</span>
            <h1>{userCount}</h1>
          </p>
      </Switch>
      </header>
    </div>
    </div>
  </Router>
>>>>>>> origin/yeun
  );
}

export default App;
