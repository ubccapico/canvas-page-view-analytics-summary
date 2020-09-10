const canvasAPI = require('node-canvas-api')
const writeToCSV = require('./writeToCSV')

Promise.all(
  [
    /* add Canvas course IDs here */
  ].map(
    courseId => canvasAPI
      .getCourseAnalytics(courseId)
      .then(analytics => writeToCSV(analytics, `${courseId}-pageviews.csv`))
  )
)
