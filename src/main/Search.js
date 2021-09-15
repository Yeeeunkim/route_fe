import React, { Component } from 'react';
import '../css/Content.css';
import { FiChevronDown } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import google from '../img/google.png';
import naver from '../img/naver.png';
import daum from '../img/daum.png';
import ConMenu from './ConMenu'

class Search extends Component {
    render() {
      return (
        <div class="search">
            <a>
            <select id="searchCondition" name="searchCondition">
                <option value="google" data-image="../img/google.png">구글</option>
                <option value="naver">네이버</option>
                <option value="daum">다음</option>
            </select>
            </a>
            <a id="a2">|</a>
            <a>
            <input id="input_sc" type="search" autocomplete="off" spellcheck="false" role="combobox" placeholder="Google 검색 또는 URL 입력" aria-live="polite"></input>
            </a>
            <a>
            <FiSearch></FiSearch>
            </a>
        </div>
        );
    }
  }
  
  export default Search;