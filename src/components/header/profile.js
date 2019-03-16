import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../styles/common/header.css'

import profile from '../../resources/icon/profile.png'
import exit from '../../resources/icon/exit.png'
import phone from '../../resources/icon/phone.png'
import message from '../../resources/icon/email.png'
import calendar from '../../resources/icon/calendar.png'
import lock from '../../resources/icon/lock.png'
import person from '../../resources/icon/person.png'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () =>{
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="drd-btn">
          <img src={person} alt="person" title="profile" width={30}/>
        </DropdownToggle>
        <DropdownMenu className="pos-pro">
          <DropdownItem header>John Doe(Guest)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem><img src={profile} alt="profile" width={24}/>{' '}My Profile</DropdownItem>
          <DropdownItem><img src={message} alt="message" width={20}/>{' '}Email</DropdownItem>
          <DropdownItem><img src={phone} alt="phone" width={22}/>{' '}Contacts</DropdownItem>
          <DropdownItem><img src={calendar} alt="calendar" width={20}/>{' '}Calendar</DropdownItem>
          <DropdownItem divider />
          <DropdownItem><img src={lock} alt="lock" width={20}/>{' '}Lock Screen</DropdownItem>
          <DropdownItem><img src={exit} alt="exit" width={20}/>{' '}Log out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}