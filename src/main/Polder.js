import React, { Component } from 'react';
import '../css/Content.css';
import ConMenu from './ConMenu'

class Polder extends Component {
    render() {
      return (
            <React.Fragment>
                <span class="porder" id="porder1">
                    <table class="porTable">
                        <tr id="ptHead">
                            <th id="pname">폴더명</th>
                            <th><ConMenu /></th>
                        </tr>
                        <tr>
                            <td>
                            <a href="https://naver.com" target="_blank">네이버 바로가기</a>
                            </td>
                        </tr>
                    </table>
                </span>
                <span class="porder" id="porder2">
                    
                </span>
                <span class="porder" id="porder3">
                    
                </span>
                <span class="porder" id="porder4">
                    
                </span>
            </React.Fragment>
        
        );
    }
  }
  
  export default Polder;