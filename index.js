require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
var csurf = require('csurf');
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
var transferRoute = require('./routes/transfer.route');

const port = 3000;

const app = express();

const cookieParser = require('cookie-parser');

const authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middleware');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);//affect every path you use

app.use(csurf( { cookie: true} ));

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index', //path to file
	{ name: 'Sinh' } //local var
))//render from views folder
app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer', authMiddleware.requireAuth, transferRoute);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))