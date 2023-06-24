const express = require('express')
const app = express()


//configuration:
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//routes:
app.get('/', (req, res) => {
    res.send('Welcome!  Hello World!')
})

//middleware:
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


// 404 Page:
app.get('*', (req, res) => {
    res.send('404')
  })

  app.listen(3001)