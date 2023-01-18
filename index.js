const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('루트 화면');
})

app.get('/login', (req, res) =>{
    res.send('로그인 화면');
})

app.listen(3000, ()=> {
    console.log('success');
});