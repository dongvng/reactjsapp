import React, { Component } from 'react'
import './header.css'

import Language from './language'
import Profile from './profile'
import Bellring from './bellring'

import message from '../../resources/icon/email.png'
import search from '../../resources/icon/search.png'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left-header">
          <input type="text" className="headerInput" placeholder="Try quick search"/>
          <img src={search} className="searchIcon" alt="search" width={22}/>
        </div>
        <div className="right-header">
          <ul className="item-header">
            <li className="child-item"><Language /></li>
            <li className="child-item"><img src={message} alt="message" title="message" width={22}/></li>
            <li className="child-item"><Bellring/></li>
            <li className="child-item"><Profile /></li>
          </ul>                  
        </div>  
      </div>
    )
  }
}

