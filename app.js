const express = require('express')
const app = express()
const port = 3000
const exphb = require('express-handlebars')
const bodyParser = require('body-parser')
const accountLogin = require('./account_login.js')

app.engine('handlebars', exphb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const name = accountLogin(email, password).firstName
  // 空白輸入無反應
  if (!email || !password) {
    res.render('index')
  }
  //若傳回之資料含有姓名（表正確），刷新成歡迎網頁
  else if (name) {
    res.send(`<h1>Welcome back ${name}</h1>`)
  }
  //若傳回之資料含有姓名（表錯誤），顯示錯誤訊息
  else {
    res.render('index', { warn: accountLogin(email, password) })
  }
})

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})