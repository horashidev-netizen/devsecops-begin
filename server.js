// file: backend/server.js
const express = require('express');
const app = express();
const port = 3001;

// LỖI BẢO MẬT: Mật khẩu/API key bị viết thẳng vào code!
// LỖI BẢO MẬT: Lộ thông tin đăng nhập Basic Auth
const DB_CONNECTION_STRING = "mongodb://admin:Password12345!@my-database.com:27017";

app.get('/api/hello', (req, res) => {
  // Giả vờ dùng key này ở đâu đó
  if (req.query.key === SUPER_SECRET_API_KEY) {
    res.send({ message: 'Chào mừng Admin!' });
  } else {
    res.send({ message: 'Chào mừng bạn đến với DevSecOps!' });
  }
});

app.listen(port, () => {
  console.log(`Backend đang chạy tại http://localhost:${port}`);
});