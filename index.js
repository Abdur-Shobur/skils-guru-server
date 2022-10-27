const express = require('express')
const cors = require('cors')
const app = express()
const courses = require('./courses/courses.json')
const success = require('./courses/success-sotry.json')
const studentreview = require('./courses/student-review.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('port start')
})
app.get('/courses', (req, res) => {
  res.send(courses)
})
app.get('/success-story', (req, res) => {
  res.send(success)
})
app.get('/student-review', (req, res) => {
  res.send(studentreview)
})

app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id) - 1
  res.send(courses[id])
})
app.listen(5000)
