import React, { Component } from 'react'
import '../../../../styles/common/todolist.css'

import doneCheckmark from '../../../../resources/icon/done-checkmark.svg'
import undone from '../../../../resources/icon/not-done.png'
import starred from '../../../../resources/icon/starred.png'
import emptyStar from '../../../../resources/icon/star-empty.png'
import priority from '../../../../resources/icon/priority.png'
import redPriority from '../../../../resources/icon/onPriority.png'
import onDelete from '../../../../resources/icon/delete.png'

export default class Todolist extends Component {
  render() {
    const {receiveState, filterlist, filterClick, number, searchValue} = this.props;
    const itemStyle = {
      textDecoration: "line-through",
      color: "#bbb"
    }
    const blue = {
      backgroundColor : "#1cbcd8"
    }
    const coral = {
      backgroundColor : "coral"
    }
    const green = {
      backgroundColor : "#0cc27e"
    }
    const projectA = {
      backgroundColor : "#e84393"
    }
    const projectB = {
      backgroundColor : "#6c5ce7"
    }
    const breeze = {
      border: "2px solid #dff9fb",
      backgroundColor : "#dff9fb"
    }
    const choseBreeze = {
      backgroundColor : "#dff9fb",
      border: "2px solid #22a6b3"
    }
    const normal = {
      border: "2px solid #fff"
    }
    const choseNormal = {
      border: "2px solid #22a6b3"
    }
    var renderList;
    if(filterClick){
      renderList = filterlist;
    }
    if(receiveState.length > 0 && !filterClick && searchValue === ""){
      renderList = receiveState;
    }
    return (
      <div className="todolist">
        <div style={{height: "60px"}}>
          <input type="text" className="searchInput" onChange={(e) => this.props.searchTodo(e.target.value)} value={this.props.searchValue} placeholder="Search todo"/>
        </div>
        <ul className="todoContain">
            {renderList ?
              renderList.map((todo) => (
                <li className={renderList.indexOf(todo) % 2 !== 0 ? "todoItem2" : "todoItem"}
                    key={todo.id}
                    style={renderList.indexOf(todo) % 2 !== 0 ? (renderList[number] === todo ? choseBreeze : breeze) : (renderList[number] === todo ? choseNormal : normal)}
                >
                  <img src={todo.isDone ? doneCheckmark : undone} 
                        alt="undone" 
                        width={24}
                        className="undone"
                        title="done"
                        onClick={() => this.props.onHandleUndone(todo)}/>
                  <img src={todo.onStar ? starred: emptyStar} 
                        alt="emptystar"
                        width={20}
                        className="emptyStar"
                        title="star"
                        onClick={() => this.props.onHandleStar(todo)}/>
                  <img src={todo.onPriority ? redPriority: priority} 
                        alt="priority"
                        width={24}
                        className="priority"
                        title="priority"
                        onClick={() => this.props.onHandlePriority(todo)}/>
                  <img src={onDelete} 
                        alt="delete"
                        width={24}
                        className="delete"
                        title="delete"
                        onClick={() => this.props.onHandleDelete(todo)}/>
                  <p onClick={() => this.props.onHandleDetail(todo)}  style={todo.isDone ? itemStyle : null} title="click for specific content" className="titleItem">{todo.title}</p>
                  <div className="designation" style={todo.designation === 'uiux' ? blue : (todo.designation === 'frontend' ? green : coral)}>{todo.designation}</div>
                  <div className="project" style={todo.project === 'projectA' ? projectA : projectB}>{todo.project === "projectA" ? "Project A" : "Project B"}</div>
                </li>
            ))
            : null}
            {receiveState.length === 0 &&    
            <p>There ain't any todo left! Add something </p>
            } 
        </ul>
      </div>
    )
  }
}
