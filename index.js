const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.get('/Users', (req, res) => res.send('<ul><li><b>Sinh Nguyen</b></li><li><b>Gordon Freeman</b></li></ul>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));