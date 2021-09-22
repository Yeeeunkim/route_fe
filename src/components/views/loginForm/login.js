import React, {Component} from 'react';
import './loginForm.css';
import naver from '../../../img/naver.png';

function loginForm()  {
    return (
      <div id="section">
        <div class="outer">
            <div class="outerBg">
                <div class="outerText">로그인</div>
            </div>
            <table>
                <tr class="tdSt">
                    <td>
                        <input type="email" class="input" id="Email" name="Email" placeholder="   이메일을 입력해주세요."/>
                    </td>
                </tr>
                <tr class="tdSt">
                    <td>
                        <input type="password" class="input"name="userPwd" id="Pwd" placeholder="   비밀번호를 입력해주세요."/>
                    </td>
                </tr>
                <tr class="tdSt">
                    <td>
                        <button name="joinBtn" id="joinBtn" >로그인</button>
                    </td>
                </tr>
                <tr class="tdSt">
                    <td>
                        <div class="findUser">아이디/비밀번호 찾기</div>
                    </td>
                </tr>
                <tr class="tdSt">
                    <td>
                        <div class="sns">SNS계정으로 간편하게 로그인하세요.</div>
                    </td>
                </tr>
                <tr class="snsLogin">
                    <span class="site" id="site1">
                        <img id="plus" src={naver} />
                    </span>
                    <span class="site" id="site2">
                        <img id="plus" src={naver} />
                    </span>
                    <span class="site" id="site3">
                        <img id="plus" src={naver} />
                    </span>
                </tr>
                <tr class="tdSt">
                    <td>
                        <div class="join">아직 라우트 회원이 아니신가요?</div>
                    </td>
                </tr>
            </table>
            
        </div>
      </div>
    )
}

export default loginForm
