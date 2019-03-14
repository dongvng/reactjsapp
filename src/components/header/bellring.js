import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './header.css'

import notification from '../../resources/icon/noti.png'
import profile from '../../resources/icon/profile.png'
import packaging from '../../resources/icon/package.png'
import warning from '../../resources/icon/warning.png'
import event from '../../resources/icon/event2.png'

export default class Bellring extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="drd-btn">
          <img src={notification} className="ringingBell" alt="notification" title="notification" width={26}/>
        </DropdownToggle>
        <DropdownMenu className="pos-ring">
          <DropdownItem header style={{textAlign: "center"}}>Notification</DropdownItem>
          <DropdownItem divider className="mb-0" />
          <DropdownItem className="notiFormat">
            <div className="left-noti">
                <img src={profile} alt="profile" width={26}/>
            </div>
            <div className="right-noti">
                <h3 style={{fontSize: "16px"}}>Jessica replied your comment</h3>
                <p style={{overflow: 'hidden'}}>I'm gonna do some challenges</p>
            </div>
          </DropdownItem>
          <DropdownItem className="notiFormat">
            <div className="left-noti">
                <img src={warning} alt="warning" width={26}/>
            </div>
            <div className="right-noti">
                <h3 style={{fontSize: "16px"}}>Security alert</h3>
                <p style={{overflow: 'hidden'}}>Your password is too weak</p>
            </div>
          </DropdownItem>
          <DropdownItem className="notiFormat">
            <div className="left-noti">
                <img src={packaging} alt="package" width={26}/>
            </div>
            <div className="right-noti">
                <h3 style={{fontSize: "16px"}}>You have a new gift</h3>
                <p style={{overflow: 'hidden'}}>Someone in your group sent you a present</p>
            </div>
          </DropdownItem>
          <DropdownItem className="notiFormat">
            <div className="left-noti">
                <img src={event} alt="event" width={26}/>
            </div>
            <div className="right-noti">
                <h3 style={{fontSize: "16px"}}>New event near you</h3>
                <p style={{overflow: 'hidden'}}>Google's summit on Machine Learning</p>
            </div>  
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}