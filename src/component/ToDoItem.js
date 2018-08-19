import React, { Component } from 'react';

export default class ToDoItem extends Component{

	constructor(props){
		super(props);

		this.toggleComplete = this.toggleComplete.bind(this);
		this.removeTask = this.removeTask.bind(this);

	}

	toggleComplete(event){
		event.stopPropagation();
		this.props.onClickUpdate(this.props.task.status === 'completed' ? 'pending' : 'completed');
	}

	removeTask(event){
		event.stopPropagation();
		this.props.onClickRemove();
	}

	render(){
		const {task, status} = this.props.task;
		return(
			<li className={status === 'completed' ? 'checked': ''} onClick={this.toggleComplete}>
				{task}
				<span onClick={this.removeTask} className="close">x</span>
			</li>
		);
	}

}