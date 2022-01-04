import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        "Sacar la ropa",
        "Hacer la cama",
        "Leer un rato"
      ],
      todoContent: ''
    }
  }

  handleChange = (e) => {
    this.setState({ todoContent: e.target.value });
  }

  handleSubmit = (e) => {
    const todoCopy = [...this.state.todoList];
    todoCopy.push(this.state.todoContent);
    this.setState({ todoList: todoCopy, todoContent: "" });
    e.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {
              this.state.todoList.map((value, index) => {
                return <li key={index}>{value}</li>
              })
            }
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="new-task" value={this.state.todoContent} placeholder="Ingresa una tarea y oprime Enter" onChange={this.handleChange} />
          </form>
        </div>
      </div>
    )
  }
}


export default App;
