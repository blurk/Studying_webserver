require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')

const productRoute = require('./routes/product.route')
const port = 3000

const app = express()

const cookieParser = require('cookie-parser')

const authMiddleware = require('./middleware/auth.middleware')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser('adaadadknsdnasdlandlasd'))

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'));


app.get('/', (req, res) => res.render('index', //path to file
	{ name: 'Sinh' } //local var
))//render from views folder
app.use('/users', authMiddleware.requireAuth ,userRoute)

app.use('/auth', authRoute)

app.use('/products', authMiddleware.requireAuth ,productRoute)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))