const express = require('express')
const app = express()

const fs = require('fs')
const dataFilePath = './data.json'
const getData = () => {
  const data = fs.existsSync(dataFilePath) ? fs.readFileSync(dataFilePath) : '[]'
  return JSON.parse(data)
}

const writeData = data => fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 4))

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*')
  res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
  next()
})

app.get('/api/list', (req, res) => {
  const data = getData()
  res.status(200).json(data).end()
})
app.post('/api/add', (req, res) => {
  const data = getData()
  data.push({
    content: req.query.content,
    completed: false,
  })
  writeData(data)
  res.status(200).end()
})
app.delete('/api/item/:id', (req, res) => {
  const data = getData()
  const id = +req.params.id
  writeData(data.filter((_, i) => i !== id))
  res.status(200).end()
})
app.put('/api/item/:id/marktocomplete', (req, res) => {
  const data = getData()
  const id = +req.params.id
  data[id].completed = true
  writeData(data)
  res.status(200).end()
})
app.listen(9000)
console.log('server is running in port 9000')
