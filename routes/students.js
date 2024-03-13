const express = require('express')
const router = express.Router()
const studentCtrl = require('../controllers/students')

router.get('/', studentCtrl.getStudents)
router.post('/', studentCtrl.createStudent)
router.get('/grades', studentCtrl.getStudentsAndGrades)

module.exports = router
