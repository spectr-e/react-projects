import Course from './Course'

const Courses = ({ courses = [] }) => {
  return (
    <ul className='d-flex mt-2' style={{ flexWrap: 'wrap', gap: 28 }}>
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
    </ul>
  )
}

export default Courses
