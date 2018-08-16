const express = require('express')
const fs = require('fs')
const ejs = require('ejs')
const app = express()

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.get('/code', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./code.json', 'utf8'))
  res.render('code.ejs', {data:data})
})

app.listen(9000)
console.log('server is running in port 9000')
