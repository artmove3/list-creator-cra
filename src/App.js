import { useState } from 'react';
import './App.css';

function App() {
	const [list, setList] = useState([]);
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);

	const onNewValueButtonClick = () => {
		const promptValue = prompt('Введите значение');
		setValue(promptValue);
		setError(promptValue.length < 3);
	};

	const addNewValue = () => {
		setList([...list, { id: Date.now(), currentValue: value }]);
		setValue('');
	};

	return (
		<div className="app">
			<h1 className="page-heading">Ввод значения</h1>
			<p className="no-margin-text">
				Текущее значение <code>value</code>: "
				<output className="current-value">{value}</output>"
			</p>
			{error && (
				<div className="error">
					Введенное значение должно содержать минимум 3 символа
				</div>
			)}
			<div className="buttons-container">
				<button className="button" onClick={onNewValueButtonClick}>
					Ввести новое
				</button>
				<button
					className="button"
					onClick={addNewValue}
					disabled={value.length < 3}
				>
					Добавить в список
				</button>
			</div>
			<div className="list-container">
				<h2 className="list-heading">Список:</h2>
				{list.length === 0 && (
					<p className="no-margin-text">Нет добавленных элементов</p>
				)}
				<ul className="list">
					{list.map(({ id, currentValue }) => (
						<li className="list-item" key={id}>
							{currentValue}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
