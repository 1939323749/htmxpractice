const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
        res.sendFile(__dirname + '/htmx.html');
});
app.get('/time', (req, res) => {
    //居中显示时间
    res.send("<div><h1>The time is " + new Date().toLocaleTimeString()+ "</h1></div>");
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});