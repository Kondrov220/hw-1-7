import './App.css';
import styled from 'styled-components';
import TaskLi from './commponents/TaskList/TaskList.jsx'
import { Component } from 'react';


const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 300px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

`;



class App extends Component {

state = {
tasks : [
  { id: 1, text: "Купити хліб" },
  { id: 2, text: "Зробити домашнє завдання" },
  { id: 3, text: "Прибрати кімнату" },
]
}

   remov = (e) => {
    this.setState(this.state.tasks = this.state.tasks.filter(task => task.id !== Number(e.target.id)));
    console.log(this.state.tasks);
  }

add = () => {
  this.setState({
    tasks: [...this.state.tasks, {id: this.state.tasks.length + 1, text: `${document.querySelector("#input").value}`}]
  });  
}
render() {
  return (
    <div>
      <input id='input'></input>
      <button onClick={this.add}>Додати</button>
        <TaskList>
        <TaskLi arr={this.state.tasks} click={this.remov}/>
        </TaskList>
    </div>
  );
}
}
export default App;
