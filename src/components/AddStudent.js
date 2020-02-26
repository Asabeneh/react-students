import React from 'react'
import PropTypes from 'prop-types'

const AddStudent = props => {
  const { firstName, lastName, country, email, avatar } = props.data
  const { onChange, onSubmit } = props
  return (
    <div className='App add'>
      <h1>Add Student</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={firstName}
          onChange={onChange}
        />{' '}
        <br />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={lastName}
          onChange={onChange}
        />{' '}
        <input
          type='text'
          name='country'
          placeholder='Country'
          value={country}
          onChange={onChange}
        />{' '}
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />{' '}
        <button>Add Student</button>
      </form>
    </div>
  )
}

export default AddStudent
