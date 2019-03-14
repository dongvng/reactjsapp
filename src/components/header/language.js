import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import china from '../../resources/icon/china.png'
import usa from '../../resources/icon/usa.png'
import france from '../../resources/icon/france.png'
import spain from '../../resources/icon/spain.png'

export default class Language extends React.Component {
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
        <DropdownToggle className="drd-btn" title="language">
          <img src={usa} alt="usa"  width={20}/>{' '}<span>EN</span>
        </DropdownToggle>
        <DropdownMenu className="pos-lang">
          <DropdownItem><img src={usa} alt="usa" width={20}/><span>{' '}English</span></DropdownItem>
          <DropdownItem><img src={france} alt="france" width={20}/><span>{' '}French</span></DropdownItem>
          <DropdownItem><img src={china} alt="china" width={20}/><span>{' '}Chinese</span></DropdownItem>
          <DropdownItem><img src={spain} alt="spain" width={20}/><span>{' '}Spanish</span></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}