import React, { Component } from 'react'
import './todo.css'

import Functionality from './functionality/functionality'
import Details from './details/detail'
import Todolist from './todolist/todolist'

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todolist: [],
      filterlist: [],
      filterClick: false,
      title: '',
      owner: '',
      startDate: '',
      dueDate: '',
      comments: '',
      project: 'projectA',
      check: false,
      designation: 'uiux',
      searchTodo: "",
      number: ""
    }
  }
  handleTitleChange = (title) => {
    this.setState({
      title: title
    })
  }
  handleOwnerChange = (owner) =>{
    this.setState({
      owner: owner
    })
  }
  handleStartDateChange = (startDate) =>{
    this.setState({
      startDate: startDate
    })
  }
  handleDueDateChange = (dueDate) =>{
    this.setState({
      dueDate: dueDate
    })
  }
  handleCommentChange = (comments) =>{
    this.setState({
      comments: comments
    })
  }
  handleProjectChange = (project) =>{
    this.setState({
      project: project
    })
  }
  handleDesignationChange = (designation) =>{
    this.setState({
      designation: designation
    })
  }
  handleCheckChange = () =>{
    this.setState((prevState) => ({
        check : !prevState.check
    }))
  }
  
  handleAddTask = () =>{
    if(this.state.title && this.state.owner){
      this.setState((prevState) => ({
        todolist: prevState.todolist.concat({
          title: this.state.title,
          owner: this.state.owner,
          startDate: this.state.startDate,
          dueDate: this.state.dueDate,
          project: this.state.project,
          designation: this.state.designation,
          check: this.state.check,
          comments: this.state.comments,
          id: this.state.owner + this.state.title,
          isDone: false,
          onStar: false,
          onPriority: this.state.check
        }),
        title: '',
        owner: '',
        startDate: '',
        dueDate: '',
        project: 'projectA',
        designation: 'uiux',
        check: false,
        comments: ''
      }))
    }
  }
  
  // modify state of todo
  handleUndone = (todo) =>{
    var index = this.state.todolist.indexOf(todo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0,index),
        {...todo, isDone: !todo.isDone},
        ...this.state.todolist.slice(index + 1)
      ]
    })
  }
  handleStar = (todo) =>{
    var index = this.state.todolist.indexOf(todo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0,index),
        {...todo, onStar: !todo.onStar},
        ...this.state.todolist.slice(index + 1)
      ]
    })
  }
  handlePriority = (todo) =>{
    var index = this.state.todolist.indexOf(todo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0,index),
        {...todo, onPriority: !todo.onPriority},
        ...this.state.todolist.slice(index + 1)
      ]
    })
  }
  handleDelete = (todo) =>{
    var index = this.state.todolist.indexOf(todo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0, index),
        ...this.state.todolist.slice(index + 1)
      ]
    })
  }
  handleDetail = (todo) =>{
    var index;
    if(!this.state.filterClick){
      index = this.state.todolist.indexOf(todo);
    }else{
      index = this.state.filterlist.indexOf(todo);
    } 
    this.setState({
      number: index
    })
  }

  handleSearchTodo = (val) =>{
    this.setState({
      searchTodo: val
    })
    setTimeout(() =>{
      this.setState({
        filterlist: this.state.todolist.filter((todo) => {
          return todo.title.split(' ').join('').indexOf(this.state.searchTodo) !== -1 || 
            todo.title.indexOf(this.state.searchTodo) !== -1 ;
        })
      })
    }, 50)
    if(!this.state.searchTodo){
      this.setState({
        filterClick : true
      })
    }
  }

  //handle filter todolist
  handleFilterAll = () =>{
    this.setState({
      filterlist: "",
      filterClick: false
    })
  }
  handleFilterProjectA = () =>{
    this.setState({
      filterlist: this.state.todolist.filter((todo) => {
        return todo.project === "projectA"
      }),
      filterClick: true
    })
  }
  handleFilterProjectB = () =>{
    this.setState({
      filterlist: this.state.todolist.filter((todo) => {
        return todo.project === "projectB"
      }),
      filterClick: true
    })
  }
  handleFilterDone = () =>{
    this.setState({
      filterlist: this.state.todolist.filter((todo) => {
        return todo.isDone === true
      }),
      filterClick: true
    })
  }
  handleFilterStar = () =>{
    this.setState({
      filterlist: this.state.todolist.filter((todo) => {
        return todo.onStar === true
      }),
      filterClick: true
    })
  }
  handleFilterPriority = () =>{
    this.setState({
      filterlist: this.state.todolist.filter((todo) => {
        return todo.onPriority === true
      }),
      filterClick: true
    })
  }
  handleFilterUiUx = () =>{
    this.setState({
      filterlist: this.state.todolist.filter((todo) => {
        return todo.designation === "uiux"
      }),
      filterClick: true
    })
  }
  handleFilterBackend = () =>{
    this.setState({
      filterlist: this.state.todolist.filter((todo) => {
        return todo.designation === "backend"
      }),
      filterClick: true
    })
  }
  handleFilterFrontEnd = () =>{
    this.setState({
      filterlist: this.state.todolist.filter((todo) => {
        return todo.designation === "frontend"
      }),
      filterClick: true
    })
  }

  handleStarDetail = (detailTodo) =>{
    var todoIndex = this.state.todolist.indexOf(detailTodo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0, todoIndex),
        {...detailTodo, onStar: !detailTodo.onStar},
        ...this.state.todolist.slice(todoIndex + 1)
      ]
    })
  }
  handlePriorityDetail = (detailTodo) =>{
    var todoIndex2 = this.state.todolist.indexOf(detailTodo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0, todoIndex2),
        {...detailTodo, onPriority: !detailTodo.onPriority},
        ...this.state.todolist.slice(todoIndex2 + 1)
      ]
    })
  }

  //handle todolist in detail field
  handleModifiedTitle = (value, detailTodo) =>{
    var todoIndex = this.state.todolist.indexOf(detailTodo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0, todoIndex),
        {...detailTodo, title : value},
        ...this.state.todolist.slice(todoIndex + 1)
      ]
    })
  }
  handleModifiedOwner = (value, detailTodo) =>{
    var todoIndex = this.state.todolist.indexOf(detailTodo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0, todoIndex),
        {...detailTodo, owner : value},
        ...this.state.todolist.slice(todoIndex + 1)
      ]
    })
  }
  handleModifiedComment = (value, detailTodo) =>{
    var todoIndex = this.state.todolist.indexOf(detailTodo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0, todoIndex),
        {...detailTodo, comments : value},
        ...this.state.todolist.slice(todoIndex + 1)
      ]
    })
  }
  handleModifiedDuedate = (value, detailTodo) =>{
    var todoIndex = this.state.todolist.indexOf(detailTodo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0, todoIndex),
        {...detailTodo, dueDate : value},
        ...this.state.todolist.slice(todoIndex + 1)
      ]
    })
  }
  handleModifiedProject = (value, detailTodo) =>{
    var todoIndex = this.state.todolist.indexOf(detailTodo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0, todoIndex),
        {...detailTodo, project : value},
        ...this.state.todolist.slice(todoIndex + 1)
      ]
    })
  }
  handleModifiedDesignation = (value, detailTodo) =>{
    var todoIndex = this.state.todolist.indexOf(detailTodo);
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0, todoIndex),
        {...detailTodo, designation : value},
        ...this.state.todolist.slice(todoIndex + 1)
      ]
    })
  }

  render() {
    return (
      <div className="todoContainer">
        <div className='todoPieceF'>
            <Functionality 
              title={this.state.title} // attach state to below props input
              owner={this.state.owner}
              startDate={this.state.startDate}
              dueDate={this.state.dueDate}
              comments={this.state.comments}
              project={this.state.project}
              designation={this.state.designation}
              check={this.state.check}
              onTitleChange={this.handleTitleChange} //update state 
              onOwnerChange={this.handleOwnerChange}
              onProjectChange={this.handleProjectChange}
              onStartDateChange={this.handleStartDateChange}
              onDueDateChange={this.handleDueDateChange}
              onDesignationChange={this.handleDesignationChange}
              onCheckChange={this.handleCheckChange}
              onCommentChange={this.handleCommentChange}
              onAddTask={this.handleAddTask}
              onFilterAll={this.handleFilterAll} //begin of filter button
              onFilterProjectA={this.handleFilterProjectA}
              onFilterProjectB={this.handleFilterProjectB}
              onFilterStar={this.handleFilterStar}
              onFilterPriority={this.handleFilterPriority}
              onFilterDone={this.handleFilterDone}
              onFilterUiUx={this.handleFilterUiUx}
              onFilterFrontend={this.handleFilterFrontEnd}
              onFilterBackend={this.handleFilterBackend}/>
        </div>
        <div className='todoPieceT'>
            <Todolist 
              number={this.state.number}
              receiveState={this.state.todolist}
              filterlist={this.state.filterlist}
              filterClick={this.state.filterClick}
              searchValue={this.state.searchTodo}
              onHandleUndone={this.handleUndone}
              onHandleStar={this.handleStar}
              onHandlePriority={this.handlePriority}
              onHandleDelete={this.handleDelete}
              onHandleDetail={this.handleDetail}
              searchTodo={this.handleSearchTodo}
            />
        </div>
        <div className='todoPieceD'>
            <Details 
              detailTodo={this.handleDetail}
              todolist={this.state.todolist}
              number={this.state.number}
              onStarDetail={this.handleStarDetail}
              onPriorityDetail={this.handlePriorityDetail}
              modifiedTitleDetail={this.handleModifiedTitle} //begin to modify state
              modifiedOwnerDetail={this.handleModifiedOwner}
              modifiedDuedateDetail={this.handleModifiedDuedate}
              modifiedCommentDetail={this.handleModifiedComment}
              modifiedProjectDetail={this.handleModifiedProject}
              modifiedDesignationDetail={this.handleModifiedDesignation}
              />
        </div>
      </div>
    )
  }
}
