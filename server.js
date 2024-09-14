const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    var duongDanFile = path.join(__dirname, './public/home.html');
    res.sendFile(duongDanFile);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});