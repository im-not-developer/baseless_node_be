const express = require('express');
const app = express();

const acoountRouter = require('./routes/account');    // 인덱스는 폴더로 가르켜도 자동으로 index.js 가 불러와짐

app.use('/', acoountRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(3000);