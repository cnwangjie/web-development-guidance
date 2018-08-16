const fs = require('fs')
const crypto = require('crypto')

const data = []

const md5 = str => crypto.createHash('md5').update(str).digest().toString('base64')

for (let i = 0; i < 200; i += 1) {
  const code = md5(Math.random().toString()).substr(0, 10)

  data.push({ code, is_used: false })
}

fs.writeFileSync('./code.json', JSON.stringify(data, null, 4))
