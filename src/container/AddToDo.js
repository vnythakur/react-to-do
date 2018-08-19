import React, { Component } from 'react';


export default class AddToDo extends Component {

	constructor(props){
		super(props);

		this.state = { task: '' };

		this.onTaskChange = this.onTaskChange.bind(this);
		this.onAddTask = this.onAddTask.bind(this);
	}

	onTaskChange = (event) => {
		this.setState({
			task: event.target.value
		})
	}

	onAddTask = () => {
		if(this.state.task){
			this.props.addTask({
				task: this.state.task,
				status: 'pending'
			});
			this.setState({ task: '' });
		}
	}

	render() {
		return (
			<div className="header">
				<h2>My To Do List</h2>
				<input type="text"
						onChange={this.onTaskChange}
						value={this.state.task}
						placeholder="Title..." />
				<span className="addBtn" onClick={this.onAddTask}>Add</span>
			</div>
		);
	}
}
