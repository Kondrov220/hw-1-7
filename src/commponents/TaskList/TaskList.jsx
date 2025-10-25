import { Component } from "react";
class TaskLi extends Component {


  state = {

  }


render(){
return <>
{this.props.arr.map((obj) => {
    return (
        <li key={obj.id}>
            <p>{obj.text}</p>
            <button onClick={this.props.click} id={obj.id}>Видалити</button>
        </li>
    );
  })}
</>}
}

export default TaskLi