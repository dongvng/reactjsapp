import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import plus from '../../../../resources/icon/plus-solid.svg'
import "./functionality.css"

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
    
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onDueDateChange = this.onDueDateChange.bind(this);
    this.onOwnerChange = this.onOwnerChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleDesignationChange = this.handleDesignationChange.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggle(){
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onTitleChange(e){
    this.props.onTitleChange(e.target.value)
  }
  onOwnerChange(e){
    this.props.onOwnerChange(e.target.value)
  }
  onStartDateChange(e){
    this.props.onStartDateChange(e.target.value)
  }
  onDueDateChange(e){
    this.props.onDueDateChange(e.target.value)
  }
  onCommentChange(e){
    this.props.onCommentChange(e.target.value)
  }
  handleProjectChange(e){
    this.props.onProjectChange(e.target.value)
  }
  handleDesignationChange(e){
    this.props.onDesignationChange(e.target.value)
  }
  onCheckChange(e){
    this.props.onCheckChange(e.target.defaultChecked)
  }
  handleSubmit(e){
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
        <Button className="addtask" onClick={this.toggle} ><img src={plus} width={13} alt="add"/>{'  '}&nbsp;{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <form onSubmit={this.handleSubmit}>  
            <ModalHeader style={{color: '#888'}} toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody style={{color: '#888'}}>
              <div>
                <label htmlFor="titleinput" className="labelInput">title</label>
                <input type="text" className="modalInput" onChange={this.onTitleChange} value={this.props.title} name="titleinput" required/>
              </div>
              <div className="row-2">
                <div style={{width: '50%', paddingRight: '5px'}}>
                  <label htmlFor="ownerinput" className="labelInput">owner</label>
                  <input type="text" className="modalInput" onChange={this.onOwnerChange} value={this.props.owner} name="ownerinput" required/>
                </div>
                <div style={{width: '50%', paddingLeft: '5px'}}>
                  <label htmlFor="projectinput" className="labelInput">
                    project
                  </label>
                  <select value={this.props.project} className="modalInput" onChange={this.handleProjectChange} style={{color: '#888'}}>
                    <option style={{color: '#888'}} value="projectA">Project A</option>
                    <option style={{color: '#888'}} value="projectB">Project B</option>
                  </select>
                </div>
              </div>
              <div className="row-2">
                <div style={{width: '50%', paddingRight: '5px'}}>
                  <label htmlFor="startdate" className="labelInput">start date</label>
                  <input type="text" className="modalInput" onChange={this.onStartDateChange} value={this.props.startDate} name="startdate"/>
                </div>
                <div style={{width: '50%', paddingLeft: '5px'}}>
                  <label htmlFor="duedate" className="labelInput">due date</label>
                  <input type="text" className="modalInput" onChange={this.onDueDateChange} value={this.props.dueDate} name="duedate"/>
                </div>
              </div>
              <div className="row-2">
                <div style={{width: '50%', paddingRight: '5px'}}>
                  <label htmlFor="priority" className="labelInput">priority</label>
                  <input type="checkbox" defaultChecked={this.props.check} onChange={this.onCheckChange} className="modalInput special-checkbox" />
                </div>
                <div style={{width: '50%', paddingLeft: '5px'}}>
                  <label htmlFor="taginput" className="labelInput">
                    tag
                  </label>
                  <select value={this.props.designation} className="modalInput" onChange={this.handleDesignationChange} style={{color: '#888'}}>
                    <option style={{color: '#888'}} value="uiux">UI/UX</option>
                    <option style={{color: '#888'}} value="frontend">Frontend</option>
                    <option style={{color: '#888'}} value="backend">Backend</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="commentsinput" className="labelInput">comments</label>
                <input type="text" onChange={this.onCommentChange} value={this.props.comments} className="modalInput" />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="info" onClick={this.props.onAddTask}>Add Task</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}
export default ModalExample;