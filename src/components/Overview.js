import React from 'react'

function Overview(props) {
  const {tasks} = props;
  return (
    <div>
        <ul>
            {tasks.map((task)=>{
                return <li key={task.id}>{task.text}</li>;
            })}
        </ul>
    </div>
  )
}

export default Overview;