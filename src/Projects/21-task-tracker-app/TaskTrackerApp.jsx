import { useState } from 'react'
import { Tasks, Title } from '../../components'
import { TableStyle } from './TableStyle'
import NewTask from './NewTask'

const TaskTrackerApp = () => {
  const [newTask, setNewTask] = useState({
    date: '',
    type: '',
    completed: '',
  })

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'inputDate':
        setNewTask({ ...newTask, date: e.target.value })
        break
      case 'inputType':
        setNewTask({ ...newTask, type: e.target.value })
        break
      default:
        break
    }
  }

  const handleAddTask = (e) => {
    setTaskList([...taskList, { date: newTask.date, type: newTask.type }])
    console.log(taskList)
  }
  let tasks = [{ date: '', type: '' }]
  const [taskList, setTaskList] = useState(tasks)
  return (
    <div className='container'>
      <Title title={'Task Tracker App'} classes={'title text-center'} />
      <TableStyle>
        <ul className='table-head'>
          <li>Date</li>
          <li>Task</li>
        </ul>

        <Tasks
          date={newTask.date}
          setData={handleChange}
          type={newTask.type}
          buttonClick={handleAddTask}
        />

        <ul className='table-row'>
          {taskList.map((task, i) => {
            console.log(task)
            return task.date && task.type ? (
              <NewTask key={i} date={task.date} type={task.type} />
            ) : null
          })}
        </ul>
      </TableStyle>
    </div>
  )
}

export default TaskTrackerApp
