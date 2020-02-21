function accountLogin(email, password) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]
  //找出使用者
  const user = users.find(user => user.email === email)
  //若使用者存在且密碼符合，回傳使用者資料;若否回傳錯誤訊息
  if (user && user.password === password) {
    return user
  }
  else {
    return 'Username/Password 錯誤'
  }
}
module.exports = accountLogin