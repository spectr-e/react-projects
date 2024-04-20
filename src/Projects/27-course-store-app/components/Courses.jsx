import Course from './Course'

const Courses = () => {
  return (
    <ul className='d-flex mt-2' style={{ flexWrap: 'wrap', gap: 28 }}>
      <Course />
    </ul>
  )
}

export default Courses
