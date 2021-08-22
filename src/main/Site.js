import React, { Component } from 'react';
import '../css/Content.css';
import plus from '../img/plus.JPG';
import naver from '../img/naver.png';

import ConMenu from './ConMenu'

class Site extends Component {
    render() {
      return (
        <React.Fragment>
            <span class="site" id="site1">
              <a href="https://naver.com" target="_blank">
                <img id="plus" src={naver} />
              </a>
            </span>
            <span class="site" id="site2">
              <img id="plus" src={plus} /> 
            </span>
            <span class="site" id="site3">
              <img id="plus" src={plus} />   
            </span>
            <span class="site" id="site4">
              <img id="plus" src={plus} />
            </span>
            <span class="site" id="site5">
              <img id="plus" src={plus} />    
            </span>
            <span class="site" id="site6">
              <img id="plus" src={plus} />
            </span>
            <span class="site" id="site7">
              <img id="plus" src={plus} />    
            </span>
        </React.Fragment>
        );
    }
  }
  
  export default Site;