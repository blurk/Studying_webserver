const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')

const users = [
	{id: 1, name: 'Sinh'},
	{id: 2, name: 'Hang'}	
];

app.get('/', (req, res) => res.render('index', //path to file
									 { name: 'Sinh'} //local var
							))//render from views folder

app.get('/users', (req, res) => res.render('users/index',{ users: users }))

app.get('/users/search', (req, res) => {
	let q = req.query.q.toLowerCase();
	let matchedUsers = users.filter( (user) => user.name.toLowerCase().indexOf(q) !== -1)
	res.render('users/index',{ users: matchedUsers, q: q })
})
							
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))