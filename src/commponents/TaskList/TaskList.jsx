import { Component } from "react";
class TaskLi extends Component {


  state = {

  }


render(){
      const { arr, click } = this.props;
return <>
{arr.map((obj) => {
    return (
        <li key={obj.id}>
            <p>{obj.text}</p>
            <button onClick={()=>click(obj.id)} id={obj.id}>Видалити</button>
        </li>
    );
  })}
</>}
}

export default TaskLi