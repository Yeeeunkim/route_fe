import { Button } from 'antd';
import React, {Component} from 'react';
import './joinForm.css';

function joinForm()  {
    return (

      <div id="section">
      <div class="outer">
        <div class="outerBg">
        <div class="outerText">회원가입</div>
        </div>
          <table>
            <tr class="tdSt">
              <td>
                <input type="email" class="input" id="Email" name="Email" placeholder="   이메일을 입력해주세요."/>
                <div><label id="emailCheck"></label></div>
              </td>
            </tr>
            <tr class="tdSt">
              <td>
                <input type="password" class="input"name="userPwd" id="Pwd" placeholder="   비밀번호를 입력해주세요. (8자 이상 15자 이하)"/>
              </td>
            </tr>
            <tr class="tdSt">
              <td>
                <input type="password" class="input"name="userPwd2" id="Pwd2" placeholder="   비밀번호를 한번 더 입력해주세요."/>
                <div><label id="pwdResult"></label></div>
              </td>
            </tr>
            <tr class="tdSt">
              <td>
                <input type="text" class="input" name="userName" id="Name" placeholder="   닉네임을 입력해주세요."/>
              </td>
            </tr>
            <tr class="tdSt">
              <td>
                <button name="joinBtn" id="joinBtn" >회원가입</button>
              </td>
            </tr>
          </table>
      </div>
      </div>
    )
}

export default joinForm
