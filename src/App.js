import React, { useState, useEffect } from 'react';
// import Header from './common/Header';
import Content from './main/Content';
import './css/Main.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/views/loginForm/login'
import joinForm from './components/views/joinForm/joinForm.js';
// import menubar from './components/views/common/menubar.js';


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
    <div className="main">
      <Route exact path="/" component={Content} />
      <Route path="/login" component={Login} />
      {/* <Header/> */}
      
    </div>
    
  );
}

export default App;
