const express    = require('express')
    , bodyParser = require('body-parser')
    , config     = require('config')
    , app        = express()

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}))

app.use(bodyParser.json({
    limit: '50mb'
}))

app.use('/api/billboards', require('./routes/billboards'))

app.listen(config.get('port'))

module.exports = app
