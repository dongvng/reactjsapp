import React, { Component } from 'react'
import '../../styles/common/aside.css'

import page from '../../resources/icon/page.png'
import wheel from '../../resources/icon/wheel.png'
import chat from '../../resources/icon/chat.png'
import home from '../../resources/icon/home.png'
import people from '../../resources/icon/people.png'
import calendar2 from '../../resources/icon/calendar2.png'
import tickbox from '../../resources/icon/tickbox.png'
import email from '../../resources/icon/email2.png'


export default class Aside extends Component {
  render() {
    return (
      <div className="aside">
        <ul className="listIcon">
          <li className="iconEach"><img src={home} alt="home" width={24}/></li>
          <li className="iconEach"><img src={email} alt="email" width={24}/></li>
          <li className="iconEach"><img src={chat} alt="chat" width={24}/></li>
          <li className="iconEach"><img src={people} alt="people" width={24}/></li>
          <li className="iconEach active"><img src={tickbox} alt="checkbox" width={24}/></li>
          <li className="iconEach"><img src={calendar2} alt="calendar" width={24}/></li>
          <li className="iconEach"><img src={page} alt="page" width={24}/></li>
          <li className="iconEach"><img src={wheel} alt="wheel" width={24}/></li>
        </ul>
      </div>
    )
  }
}
