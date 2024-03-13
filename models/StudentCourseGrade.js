const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: 'Student' },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
    score: { type: Number, required: true },
    letter: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('StudentCourseGrade', courseSchema)
