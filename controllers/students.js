const Student = require('../models/Student')
const StudentCourseGrade = require('../models/StudentCourseGrade')

const getStudents = async (req, res) => {
  try {
    const allStudents = await Student.find({}).populate()
    res.send(allStudents)
  } catch (error) {
    console.log('Get students constroller error', error)
  }
}

const getStudentsAndGrades = async (req, res) => {
  try {
    const allStudentsAndGrades = await StudentCourseGrade.find({})
      .populate('Student')
      .populate('Course')
      .exec()
    console.log('Students Grades:', allStudentsAndGrades)
    res.send(allStudentsAndGrades)
  } catch (error) {
    console.log('Get students constroller error', error)
  }
}

const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body)
    console.log('student ', req.body, ' created.')
    res.send(newStudent)
  } catch (error) {
    console.log('error on yje create student controller', error)
  }
}

module.exports = {
  getStudents,
  createStudent,
  getStudentsAndGrades
}
