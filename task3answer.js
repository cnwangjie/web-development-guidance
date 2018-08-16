const express = require('express')
const app = express()
app.all('/auth/login', (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')
  res.append('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, HEAD')

  if (!req.query.username || !req.query.password) {
    res.status(400).json({
      status: 'error',
      msg: 'paramater error',
    }).end()
  } else if (req.query.username !== 'aaa') {
    res.status(200).json({
      status: 'error',
      msg: 'user not exists',
    }).end()
  } else if (req.query.password !== '1234') {
    res.status(200).json({
      status: 'error',
      msg: 'wrong password',
    }).end()
  } else {
    res.status(200).json({
      status: 'success',
      msg: 'login success',
      token: 'MzE1MzY3ZmQ3YjA1YTliNzk3YTFiMDhmNGQ0Y2RmYmEgIC0K',
    }).end()
  }
})
app.listen(9000)
console.log('server is running in port 9000')
