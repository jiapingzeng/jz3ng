var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()
var port = process.env.PORT || 3000
app.listen(port)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(compression())
app.use(express.static(path.join(__dirname, 'public')))

//routes
var index = require('./routes/index')
app.use('/', index)

module.exports = app