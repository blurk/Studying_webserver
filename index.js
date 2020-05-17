const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const shortid = require('shortid');

db.defaults({ users: [] })
  .write()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index', //path to file
									 { name: 'Sinh'} //local var
							))//render from views folder

app.get('/users', (req, res) => res.render('users/index',{ users: db.get('users').value() }))

app.get('/users/search', (req, res) => {
	let q = req.query.q.toLowerCase();
	const users = db.get('users').value();
	let matchedUsers = users.filter( (user) => user.name.toLowerCase().indexOf(q) !== -1)
	res.render('users/index',{ users: matchedUsers, q: q })
})
							
app.get('/users/create', (req, res) => {
	res.render('users/create')
})

app.get('/users/:id', (req, res) => {
	let id = req.params.id;
	let user = db.get('users').find({ id: id }).value()
	res.render('users/view', {
		user: user
	})
})

app.post('/users/create', (req, res) => {
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write()
	res.redirect('/users')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))