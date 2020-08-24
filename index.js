const canvasAPI = require('node-canvas-api')
const writeToCSV = require('./writeToCSV')

Promise.all(
  [
    // canvas ids here
  ].map(
    courseId => canvasAPI
      .getCourseAnalytics(courseId)
      .then(analytics => writeToCSV(analytics, `${courseId}-analytics.csv`))
  )
)
