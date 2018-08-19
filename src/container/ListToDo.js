import React, { Component } from 'react';

import ToDoItem from '../component/ToDoItem';

export default class ListToDo extends Component {
	render() {
		return (
			<ul>
				{
					this.props.tasks.map((task, i) => {
						return <ToDoItem task={task} key={i}
									onClickRemove={() => {this.props.removeTask(i)}}
									onClickUpdate={(status) => {this.props.updateTaskStatus(status, i)}}
								/>;
					})
				}
			</ul>
		);
	}
}
