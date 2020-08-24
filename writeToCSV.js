const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const fswrite = promisify(fs.writeFile)

const writeHeader = (pathToFile, file) => fswrite(pathToFile, file)

const writeToCSV = (data, filename) => {
  const csv = path.join(__dirname, '/output/', filename)

  const header = [
    'student_number',
    'page_views' + '\r\n'
  ]

  writeHeader(csv, header)

  const expandedData = data
    .map(analytics => [
      analytics.id,
      analytics.page_views
    ].join(',') + '\r\n')

  expandedData.unshift(header)
  writeHeader(csv, expandedData.join(''))
}

module.exports = writeToCSV
