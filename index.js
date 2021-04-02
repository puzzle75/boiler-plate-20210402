const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cyk:abcd1234@boilerplate.jxr2b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~~ 안녕하세요. 노드제이에스 시작~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})