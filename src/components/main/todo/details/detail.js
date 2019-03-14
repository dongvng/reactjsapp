import React, { Component } from 'react'
import './detail.css'

import usericon from '../../../../resources/icon/usericon.png'
import calendar from '../../../../resources/icon/calendar.png'
import pointpen1 from '../../../../resources/icon/pointpen1.png'
import archiveSolid from '../../../../resources/icon/archive-solid.svg'
import checklist from '../../../../resources/icon/checklist.png'
import checkbox from '../../../../resources/icon/checkbox.png'
import greencheck from '../../../../resources/icon/greencheck.png'
import whitecheck from '../../../../resources/icon/whitecheck.png'

import starred from '../../../../resources/icon/starred.png'
import emptyStar from '../../../../resources/icon/star-empty.png'
import priority from '../../../../resources/icon/priority.png'
import redPriority from '../../../../resources/icon/onPriority.png'
import pencil from '../../../../resources/icon/pencil.png'
import pencilHover from '../../../../resources/icon/pencilHover.png'

export default class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
      isOn: false,
      isHover: false,
      isClick: false
    }
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }
  handleHoverOn(){
    this.setState((prevState) => ({
      isHover: true
    }))
  }
  handleHoverOff(){
    this.setState((prevState) => ({
      isHover: false
    }))
  }
  onStarDetail(detailTodo){
    this.props.onStarDetail(detailTodo)
  }
  onPriorityDetail(detailTodo){
    this.props.onPriorityDetail(detailTodo)
  }
  onModifyDetailOn(detailTodo){
    this.setState({
      isOn: true
    })
  }
  onModifyDetailOff(detailTodo){
    this.setState({
      isOn: false
    })
  }
  render() {
    const detailTodo = this.props.todolist[this.props.number];
    const width90 ={
      width: "90%"
    }
    var renderDetail;
    var modifiedDetail;
    if(this.props.todolist.length === 0){
      var addTodo = (
        <div className="defaultDetail">
          <img src={checklist} alt="checklist" width={36}/>
          <p>Add todo to show detail</p>
        </div>
      )
    }
    if(this.props.todolist.length > 0 && detailTodo === undefined){
      var showTodoLine = (
        <div className="defaultDetail">
          <img src={checkbox} alt="checkbox" width={36}/>
          <p>{' '}please select a todo to show details</p>
        </div>
      )
    }
    if(detailTodo !== undefined && this.state.isOn === false){
      renderDetail = detailTodo;
    }
    if(this.state.isOn === true){
      modifiedDetail = (
          <div className="detailContainer">
            <div className="iconDetail">
              <img src={detailTodo.onStar ? starred: emptyStar} 
                        alt="emptystar"
                        width={20}
                        className="emptyStarDetail"
                        title="star"

                        onClick={() => this.onStarDetail(detailTodo)}/>
              <img src={detailTodo.onPriority ? redPriority: priority} 
                    alt="priority"
                    width={24}
                    className="priorityDetail"
                    title="priority"
                    onClick={() => this.onPriorityDetail(detailTodo)}/>
              <button className="modifiedButton" >
                <img src={this.state.isHover ? whitecheck : greencheck} 
                    alt="modify information"
                    width={22}
                    className="modifyDetail"
                    title="modify information"
                    onMouseOver={this.handleHoverOn}
                    onMouseLeave={this.handleHoverOff}
                    onClick={() => this.onModifyDetailOff(detailTodo)}/>
              </button>
            </div>
            <div className="user-date">
              <div className="inputContainer">
                <input type="text" className="modifiedInput" style={width90} value={detailTodo.title} onChange={(e) => this.props.modifiedTitleDetail(e.target.value, detailTodo)}/>
              </div>
              <div className="info-user-date">
                <div className="commonStyle">
                  <img src={usericon} alt="user" width={24} height={24}/>{'   '}
                  <input type="text" className="modifiedInput"  value={detailTodo.owner} onChange={(e) => this.props.modifiedOwnerDetail(e.target.value, detailTodo)}/>
                </div>
                <div className="commonStyle">
                  <img src={calendar} alt="calendar" width={24} height={24}/>{' '}
                  <input type="text" className="modifiedInput" value={detailTodo.dueDate} onChange={(e) => this.props.modifiedDuedateDetail(e.target.value, detailTodo)}/>
                </div>
              </div>
            </div>
            <div className="textareaInput">
              <textarea type="text" className="modifiedInput plus" rows="4" value={detailTodo.comments} onChange={(e) => this.props.modifiedCommentDetail(e.target.value, detailTodo)} />
            </div>
            <div className="infoDetail">
              <div className="info-user-date">
                <div className="commonStyle">
                  <img src={archiveSolid} alt="project" width={24} height={24}/>{' '}
                  <select value={detailTodo.project} className="modifiedInput" onChange={(e) => this.props.modifiedProjectDetail(e.target.value, detailTodo)} style={{color: '#888'}}>
                    <option style={{color: '#888'}} value="projectA">Project A</option>
                    <option style={{color: '#888'}} value="projectB">Project B</option>
                  </select>
                </div>
                <div className="commonStyle">
                  <img src={pointpen1} alt="designation" width={24} height={24}/>{' '}
                  <select value={detailTodo.designation} className="modifiedInput" onChange={(e) => this.props.modifiedDesignationDetail(e.target.value, detailTodo)} style={{color: '#888'}}>
                    <option style={{color: '#888'}} value="uiux">UI/UX</option>
                    <option style={{color: '#888'}} value="frontend">Frontend</option>
                    <option style={{color: '#888'}} value="backend">Backend</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="subInfo">
              <p>{detailTodo.owner} created task on {detailTodo.startDate}</p>
              <p>{detailTodo.owner} added to {detailTodo.project === "projectA" ? "Project A" : "Project B"}</p>
              <p>{detailTodo.owner} added to {detailTodo.designation}</p>
            </div>
          </div>
      )
    }
    return (
      <div className="detail">
        {renderDetail &&
          <div className="detailContainer">
            <div className="iconDetail">
              <img src={detailTodo.onStar ? starred: emptyStar} 
                        alt="emptystar"
                        width={20}
                        className="emptyStarDetail"
                        title="star"

                        onClick={() => this.onStarDetail(detailTodo)}/>
              <img src={detailTodo.onPriority ? redPriority: priority} 
                    alt="priority"
                    width={24}
                    className="priorityDetail"
                    title="priority"
                    onClick={() => this.onPriorityDetail(detailTodo)}/>
              <button className="modifiedButton" >
                <img src={this.state.isHover ? pencilHover : pencil} 
                    alt="modify information"
                    width={22}
                    className="modifyDetail"
                    title="modify information"
                    onMouseOver={this.handleHoverOn}
                    onMouseLeave={this.handleHoverOff}
                    onClick={() => this.onModifyDetailOn(detailTodo)}/>
              </button>
            </div>
            <div className="user-date">
              <p className="detailEle">{detailTodo.title}</p>
              <div className="info-user-date">
                <div className="commonStyle">
                  <img src={usericon} alt="user" width={24} height={24}/>
                  <p style={{margin: "0 0 0 5px", fontSize: "18px"}}>{detailTodo.owner}</p>
                </div>
                <div className="commonStyle">
                  <img src={calendar} alt="calendar" width={24} height={24}/>
                  <p style={{margin: "0 0 0 5px", fontSize: "18px"}}>{detailTodo.dueDate}</p>
                </div>
              </div>
            </div>
            <hr style={{width: "90%", border: "1px solid #bbb"}}/>
            <div className="infoDetail">
              <p style={{fontSize: "18px"}} className="detailEle">{detailTodo.comments}</p>
              <div className="info-user-date">
                <div className="commonStyle">
                  <img src={archiveSolid} alt="project" width={24} height={24}/>
                  <p style={{margin: "0 0 0 5px", fontSize: "18px"}}>{detailTodo.project === "projectA" ? "Project A":"Project B"}</p>
                </div>
                <div className="commonStyle">
                  <img src={pointpen1} alt="designation" width={24} height={24}/>
                  <p style={{margin: "0 0 0 5px", fontSize: "18px"}}>{detailTodo.designation}</p>
                </div>
              </div>
            </div>
            <hr style={{width: "90%", border: "1px solid #bbb"}}/>
            <div className="subInfo">
              <p><span style={{fontWeight:"600"}}>{detailTodo.owner}</span> created task on <span style={{fontWeight:"600"}}>{detailTodo.startDate}</span></p>
              <p><span style={{fontWeight:"600"}}>{detailTodo.owner}</span> added to <span style={{fontWeight:"600"}}>{detailTodo.project === "projectA" ? "Project A" : "Project B"}</span></p>
              <p><span style={{fontWeight:"600"}}>{detailTodo.owner}</span> added to <span style={{fontWeight:"600"}}>{detailTodo.designation}</span></p>
            </div>
          </div>
        }
        {modifiedDetail}
        {addTodo}
        {showTodoLine}
      </div>
    )
  }
}
