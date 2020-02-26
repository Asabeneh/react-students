import React, { Component } from 'react'
import { students } from './data/students'
import Students from './components/Students'
import AddStudent from './components/AddStudent'
import './App.css'

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
      id: this.state.students.length + 1
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
    // const { firstName, lastName, country, email, avatar } = this.state.student
    return (
      <div className='container'>
        <h1> Number of students: {this.state.students.length}</h1>
        <AddStudent
          data={this.state.student}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <Students students={this.state.students} />

        {/* <Student
          firstName='Asab'
          lastName='Yeta'
          country='Finland'
          email='example@example.com'
          title='Programmer'
          phone='02456789'
        /> */}
      </div>
    )
  }
}

export default App
