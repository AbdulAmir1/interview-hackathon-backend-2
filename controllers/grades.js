// const mongoose = require('mongoose')
ObjectId = require('mongoose').Types.ObjectId
const StudentCourseGrade = require('../models/StudentCourseGrade')
// const Schema = mongoose.Schema
const getGrades = async (req, res) => {
  try {
    const allStudents = await Student.find({})
    res.send(allStudents)
  } catch (error) {
    console.log('Get students constroller error', error)
  }
}

const getStudentGrade = async (req, res) => {
  try {
    console.log('params :', req.params.studentId, ', ', req.params.courseid)
    const grade = await StudentCourseGrade.find({
      $and: [
        {
          studentId: new ObjectId(req.params.studentId)
        }
      ]
    }).exec()
    console.log('foundP: ', grade)
    res.send(grade)
  } catch (error) {
    console.log('Get students grade error', error)
  }
}

const createStudentCourseGrade = async (req, res) => {
  try {
    const newStudentCourseGrade = await StudentCourseGrade.create(req.body)
    console.log('grade ', req.body, ' created.')
    res.send(newStudentCourseGrade)
  } catch (error) {
    console.log('error on yje create student controller', error)
  }
}

module.exports = {
  getGrades,
  createStudentCourseGrade,
  getStudentGrade
}
