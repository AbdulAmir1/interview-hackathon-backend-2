const express = require('express')
const router = express.Router()
const gradesCtrl = require('../controllers/grades')

//get all courses

// router.get('/', coursesCtrl.getAllCourses)

router.post('/', gradesCtrl.createStudentCourseGrade)
router.get('/:studentId/:courseid', gradesCtrl.getStudentGrade)

module.exports = router
