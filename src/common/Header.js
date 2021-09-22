import React, { Component } from 'react';
import '../css/Header.css';
import logo from '../logo/logo.JPG';
import { Link } from 'react-router-dom';
    
class Header extends Component {
    render() {
        return (
          <React.Fragment>
            <div>
              <img src={ logo } width='240px' height='80px' alt='logo' />
                
              <a class="small-menu" id="small-menu">
                <ul>
                  <li id="ho">라우트?</li>
                  <li id="ho"><Link to='/login'>로그인</Link></li>
                  <li id="ho">+라우트를 시작페이지로</li>
                </ul>
              </a>
            </div>
            
          </React.Fragment>
          
        );
      }
    }
    
export default Header;