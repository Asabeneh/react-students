import React from 'react'
import Student from './Student'
import PropTypes from 'prop-types'

const Students = props => {
  const studentList = props.students.map(student => (
    <Student key={student.id} student={student} />
  ))
  return <div className='students'>{studentList}</div>
}

Students.propTypes = {}

export default Students
