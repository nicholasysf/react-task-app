import React, { Component } from 'react'
import uniqid from 'uniqid';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       task: { text: '', id:uniqid()},
       tasks:[],
    };
  }
  //When user keys in something, change the value of the task
  handleChange = (e) =>{
    this.setState({
        task: { text: e.target.value , id:this.state.task.id}
    });
  };

  onSubmitTask = (e) => {
    // preventDefault ensures that when user submits a task, it doesnt refresh the page into default
    e.preventDefault();
    this.setState({
      // Adding the task that user key in into the tasks' array
      tasks: this.state.tasks.concat(this.state.task),
      // Resetting the input bar to be empty
      task: {text:'', id:uniqid()},
      
    });
  };

  render() {
    const {task,tasks} = this.state;
    return (
      <div>
         <form onClick={this.onSubmitTask} >
           <label htmlFor="taskInput">Enter task</label>
           <input type="text" id="taskInput" value={task.text} onChange={this.handleChange}></input>
           <button type="submit">Add task</button>
         </form>
         <Overview tasks={tasks}></Overview>
      </div>
    );
  }
}

export default App;