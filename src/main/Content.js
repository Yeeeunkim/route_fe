import React, { Component } from 'react';
import '../css/Content.css';
import Search from './Search'
import Site from './Site'
import Polder from './Polder'
import ConMenu from './ConMenu'
import Header from '../common/Header';

    
class Content extends Component {
  render() {
    return (
      <React.Fragment>
          <Header />
          <div class="content">
            <div class="app">
              <Search/>
            </div>
            <div class="app2">
              <Site/>
            </div>
            <div class="app3">
              <Polder/>
            </div> 
          </div>
        </React.Fragment>
    );
  }
}

export default Content;