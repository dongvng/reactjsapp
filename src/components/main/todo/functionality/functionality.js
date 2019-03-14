import React, { Component } from 'react'
import "./functionality.css"
import ModalExample from './modal'

import archiveSolid from '../../../../resources/icon/archive-solid.svg'
import user from '../../../../resources/icon/user-regular.svg'
import pointpen from '../../../../resources/icon/pointpen.png'
import pointpen2 from '../../../../resources/icon/pointpen2.png'
import pointpen3 from '../../../../resources/icon/pointpen3.png'
import done from '../../../../resources/icon/done.png'
import priority from '../../../../resources/icon/priority.png'
import normalStar from '../../../../resources/icon/normalStar.png'

export default class Functionality extends Component {
  render() {
    return (
	 <div className="functionality">
        <div>
            <ModalExample 
                buttonLabel="add task" 
                title={this.props.title}
                owner={this.props.owner}
                startDate={this.props.startDate}
                dueDate={this.props.dueDate}
                comments={this.props.comments}
                project={this.props.project}
                designation={this.props.designation}
                check={this.props.check}
                
                onTitleChange={this.props.onTitleChange}
                onOwnerChange={this.props.onOwnerChange}
                onStartDateChange={this.props.onStartDateChange}
                onDueDateChange={this.props.onDueDateChange}
                onCommentChange={this.props.onCommentChange}
                onProjectChange={this.props.onProjectChange}
                onDesignationChange={this.props.onDesignationChange}
                onCheckChange={this.props.onCheckChange}
                onAddTask={this.props.onAddTask}
                />
            <hr style={{width: "80%"}}/>
        </div>
        <div>
            <All 
                onFilterAll={this.props.onFilterAll}/>
        </div>
        <div className="filterBox">
            <p className="headFilter">projects</p>
            <FilterBtn 
                text="ProjectA" 
                icon={archiveSolid}
                handleClick={this.props.onFilterProjectA} />
            <FilterBtn 
                text="ProjectB" 
                icon={archiveSolid} 
                handleClick={this.props.onFilterProjectB}/>
        </div>
        <div className="filterBox">
            <p className="headFilter fB-2">filters</p>
            <FilterBtn 
                text="Starred" 
                icon={normalStar} 
                handleClick={this.props.onFilterStar}/>
            <FilterBtn 
                text="Priority" 
                icon={priority} 
                handleClick={this.props.onFilterPriority}/>
            <FilterBtn 
                text="Done" 
                icon={done} 
                handleClick={this.props.onFilterDone}/>
        </div>
        <div className="filterBox">
            <p className="headFilter fB-3">tags</p>
            <FilterBtn 
                text="UI/UX" 
                icon={pointpen} 
                handleClick={this.props.onFilterUiUx}/>
            <FilterBtn 
                text="Frontend" 
                icon={pointpen2} 
                handleClick={this.props.onFilterFrontend}/>
            <FilterBtn 
                text="Backend" 
                icon={pointpen3} 
                handleClick={this.props.onFilterBackend}/>
        </div>
	 </div>
    )
  }
}

class All extends Component{
    render(){
        return(
            <button className="addBtn" onClick={this.props.onFilterAll}>
                <img src={user} width={14} alt="all"/>
                {' '}all
            </button>
        )   
    }
}
class FilterBtn extends Component{
    render(){
        const {text, icon} = this.props;
        return(
            <button className="filter" onClick={this.props.handleClick}>
                <img src={icon} width={24} alt="icon"/>
                {' '}{text}
            </button>
        )
    }
}
