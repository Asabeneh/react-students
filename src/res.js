import React, { Component } from 'react'
import { randomId, showDateTime } from './utils/random-id.js'
import { students } from './data/students'
import './assets/styles/styles.scss'
import './App.css'


console.log(showDateTime())

class App extends Component {
  state = {
    student: {
      firstName: '',
      lastName: '',
      country: '',
      email: '',
      avatar:
        'https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=400&d=mm&r=g'
    },

    students: students
  }

  handleChange = e => {
    // let name = e.target.name
    // let value = e.target.value
    // destructuring name, value from input element or target
    const { name, value } = e.target
    // setting the value of the input to the state

    const student = {
      ...this.state.student,
      [name]: value,
      id: randomId()
    }

    this.setState({ student })
  }
  handleSubmit = e => {
    // it prevents the default behavior of the form element
    e.preventDefault()

    this.setState({ students: [...this.state.students, this.state.student] })
  }

  deleteStudent = id => {
    const students = this.state.students.filter(student => id !== student.id)
    this.setState({ students: students })
  }

  render() {
    const { students } = this.state
    console.log(students)
    
    const { firstName, lastName, country, email, avatar } = this.state.student
    console.log(students)
    return (
     
        <div className='students'>{studentsList}</div>
      </div>
    )
  }
}

export default App
