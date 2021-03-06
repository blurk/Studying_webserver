const shortid = require('shortid');

const db = require('../db');

module.exports.index = function(req, res) {
    res.render('users/index',{ users: db.get('users').value() 
  })
};

module.exports.search = function (req, res) {
	let q = req.query.q.toLowerCase();
	const users = db.get('users').value();
	let matchedUsers = users.filter( (user) => user.name.toLowerCase().indexOf(q) !== -1)
	res.render('users/index',{ users: matchedUsers, q: q })
}

module.exports.create = function (req, res) {
	res.render('users/create')
}

module.exports.id = function (req, res) {
	let id = req.params.id;
	let user = db.get('users').find({ id: id }).value()
	res.render('users/view', {
		user: user
	})
}

module.exports.postCreate = function (req, res) {
	req.body.id = shortid.generate();

	if (!req.file) return res.send('Please upload a file')

	req.body.avatar = req.file.path.replace('public\\','');

	db.get('users').push(req.body).write();

	res.redirect('/users');
}