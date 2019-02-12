const config = {
  host: 'localhost',
  port: 27017,
}

const mongoose = require('mongoose')
mongoose.connect(
  'mongodb://' + config.host + ':' + config.port + '/inventory',
  { useNewUrlParser: true }
)

mongoose.Promise = global.Promise

var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB Error:'))
db.on('connected', console.log.bind(console, ' Connected to database.'))

module.exports = mongoose.connection
