const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/user.route')

const port = 3000

const app = express()

const cookieParser = require('cookie-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser())

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'));


app.get('/', (req, res) => res.render('index', //path to file
	{ name: 'Sinh' } //local var
))//render from views folder

app.use('/users', userRoute)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))