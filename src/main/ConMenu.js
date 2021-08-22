import React from 'react'
import '../css/ConMenu.css'
import {ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {FaRegCopy, FaList,FaEllipsisV, FaShareAlt} from 'react-icons/fa'
import {RiSendPlaneFill, RiDeleteBin6Line} from 'react-icons/ri'
import moreView from '../img/moreView.JPG';
import { FiMoreVertical } from "react-icons/fi";


const ConMenu = () => {
   
  const copyConMenu = (e, data) => {
    var ConMenu = data.copy
    navigator.clipboard.writeText(ConMenu)
    alert(`ConMenu code ${ConMenu} copied to your clipboard`)
  }

    return (
        <>
      <ContextMenuTrigger id="contextmenu">
        <img id ="moreView" className="coupon" src={moreView} />
      </ContextMenuTrigger>
 
      <ContextMenu id="contextmenu">
        <MenuItem data={{copy: 'MI50'}} onClick={copyConMenu}>
          <FaRegCopy className="copy"/>
            <span>내폴더편집</span>
        </MenuItem>
        <MenuItem>
          <RiDeleteBin6Line className="delete"/>
            <span>폴더삭제</span>
        </MenuItem>
      </ContextMenu>
        </>
    )
}

export default ConMenu