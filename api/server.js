import express from 'express'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)