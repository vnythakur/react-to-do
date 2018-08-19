import React, { Component } from 'react';

import AddToDo from '../container/AddToDo';
import ListToDo from '../container/ListToDo';


class App extends Component {

	constructor(props){
		super(props);

		this.onAddTask = this.onAddTask.bind(this);
		this.onRemoveTask = this.onRemoveTask.bind(this);
		this.onUpdateTaskStatus = this.onUpdateTaskStatus.bind(this);

		this.state = {
			tasks: []
		};
	}

	onAddTask(task) {
		this.setState({
			tasks: [task, ...this.state.tasks]
		})
	}

	onRemoveTask(i){
		this.setState({
			tasks: [...this.state.tasks.slice(0,i), ...this.state.tasks.slice(i+1)]
		})
	}

	onUpdateTaskStatus(status,i){
		const tasks = [...this.state.tasks];
		tasks[i].status = status;
		this.setState({ tasks });
	}

	render() {
		return (
			<div className="App">

				<AddToDo addTask={(task) => this.onAddTask(task)} />

				<ListToDo tasks={this.state.tasks}
						removeTask={(i) => this.onRemoveTask(i)}
						updateTaskStatus={(status,i) => this.onUpdateTaskStatus(status,i)} />

			</div>
		);
	}
}

export default App;
