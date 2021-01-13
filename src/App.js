import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { TodoListStore } from './component/TodoList';
import { TodoFilterStore } from './component/TodoFilter';
import AddTodoForm from './component/AddTodoForm';
import "./App.css"
const App = () => {
	document.title = "To do list"
	return (
		<Provider store={store}>
			<div className="container">
				<div className="card">
					<div className="card-header">
						<div className="card-title">List de tâche à faire</div>
					</div>
					<div className="card-body">
						<TodoFilterStore />
						<TodoListStore />
						<AddTodoForm />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App; 
