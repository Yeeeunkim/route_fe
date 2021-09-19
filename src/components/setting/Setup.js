import React from 'react';
import '../../css/setting/Setup.css';
import menuImg from '../../imges/menu.png';
import upArrow from '../../imges/upArrow.svg';
import downArrow from '../../imges/downArrow.svg';
import { Component } from 'react';
function Setup(){
    return(
        <div class="Setup">
           <h2>위젯 위치 설정</h2>
           <button className="button-reset">초기화</button>
          
           <div id="Content">
                <WidgetSpace></WidgetSpace>
                <WidgetSpace></WidgetSpace>
                <WidgetSpace></WidgetSpace>
                <WidgetSpace></WidgetSpace>
           </div>
           <div id="WidgetWrapper">
               <img src={upArrow}></img>
               <Widget></Widget>
               <Widget></Widget>
               <Widget></Widget>
               <Widget></Widget>
               <Widget></Widget>
               <img src={downArrow}></img>
           </div>
           <div class="themeSet">
                <span>테마선택</span>
                <div class="theme-container">
                    <div class="theme"></div>
                    <div class="theme"></div>
                    <div class="theme"></div>
                    <div class="theme"></div>
                    <div class="theme"></div>
                    <div class="theme"></div>
                    <div class="theme"></div>
                    <div class="theme"></div>
                </div>
           </div>
        </div>
    );
}
export default Setup;

class WidgetSpace extends Component{
    render(){
        return(
            <div class="WidgetSpace">
                <img src={menuImg} />
                <button class="button-close">X</button>
            </div>
        );
    }
}
class Widget extends Component{
    render(){
        return(
            <div class="Widget">
                
            </div>
        );
    }
}