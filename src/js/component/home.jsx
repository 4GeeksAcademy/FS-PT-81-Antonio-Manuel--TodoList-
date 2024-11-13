import React, { useState } from "react";


//include images into your bundle


//create your first component




const Home = () => {

	const [cosas, setCosas] = useState('');
	const [deberes, setDeberes] = useState([]);
console.log(deberes)
	const handleSubmit = e => {
		e.preventDefault();
		setDeberes([...deberes,cosas]);
		setCosas("")
	}

	const handleChange = (e) => {
		setCosas(e.target.value);
		console.log(e.target.value)
	  };

	const handleDelete = (index) => {
		setDeberes(deberes.filter((_, i) => i!= index))
	}


	return (
		<div className="container">
		<form onSubmit={handleSubmit}>
		  <input
			type="text"
			onChange={handleChange}
			value={cosas}
			placeholder="Escribe una tarea..."
		  />
		</form>
		<ul>
		  {deberes.length > 0 ? (
			deberes.map((cosas, i) => (
			  <li key={i}>
				{cosas}{" "}
				<span className="delete-button" onClick={() => handleDelete(i)}>
				  X
				</span>
			  </li>
			))
		  ) : (
			<li> No hay tareas, añadir tareas</li>
		  )}
		</ul>
		<p>Contador de tareas: {deberes.length}</p>
	  </div>
	);
  };
  

export default Home;
