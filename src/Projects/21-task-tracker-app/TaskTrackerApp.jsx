import { Title } from '../../components'
import { TableStyle } from './TableStyle'

const TaskTrackerApp = () => {
  return (
    <div className='container'>
      <Title title={'Task Tracker App'} />
      <TableStyle>
        <ul className='table-head'>
          <li>Date</li>
          <li>Task</li>
        </ul>
        {/* <Tasks /> */}
        <ul className='table-row'>
          <li className='completed'>Task</li>
          <li>Task</li>
          <li>Task</li>
          <li>Task</li>
        </ul>
      </TableStyle>
    </div>
  )
}

export default TaskTrackerApp
