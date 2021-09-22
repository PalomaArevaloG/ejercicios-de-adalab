// Fichero src/components/App.js
import '../styles/App.scss';
import { useState } from 'react';
const App = () => {
	const [tasks, setTasks] = useState([
		{ task: 'Comprar harina, jamón y pan rallado', completed: true },
		{ task: 'Hacer croquetas ricas', completed: true },
		{ task: 'Ir a la puerta de un gimnasio', completed: false },
		{
			task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
			completed: false,
		},
	]);
	const [searchTask, setSearchTask] = useState('');

	const handleInput = (ev) => {
		setSearchTask(ev.target.value);
	};

	const handleTasks = (ev) => {
		const clickedTaskId = ev.currentTarget.id;

		tasks[clickedTaskId].completed = !tasks[clickedTaskId].completed;
		setTasks([...tasks]);
	};
	const renderTasks = () =>
		tasks
			.filter((task) => {
				return task.task
					.toLowerCase()
					.includes(searchTask.toLowerCase());
			})

			.map((tasks, index) => {
				return (
					<li
						key={index}
						className={tasks.completed ? 'complete' : ''}
						onClick={handleTasks}
						id={index}>
						{tasks.task}
					</li>
				);
			});

	return (
		<div>
			<h1> Mi lista de tareas </h1>
			<ol>{renderTasks()}</ol>
			<form>
				<label htmlFor="searchTask">Escribe una tarea</label>
				<input
					type="text"
					id="searchTask"
					value={searchTask}
					onChange={handleInput}
				/>
			</form>
		</div>
	);
};

export default App;
