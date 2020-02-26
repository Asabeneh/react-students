import React from 'react'
import PropTypes from 'prop-types'

const Student = props => {
  return (
    <div className='student'>
      <h3>
        {props.student.firstName} {props.student.lastName}
      </h3>
      <p>{props.student.country}</p>

      <p>Title{props.student.title}</p>
      <p>{props.student.email}</p>
      <p>Phone: {props.student.phone}</p>
      <img src={props.student.avatar} />
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

Student.propTypes = {}

export default Student
