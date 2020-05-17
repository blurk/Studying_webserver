# Studying_webserver

## Lesson 1

## Lesson 2

## Lesson 3: query param

* name attribute in `<input>` is for sending data to the server when submit.
* It will send and object {name: value in the input tag}, example: {q: "image"}

## Lesson 4: POST

* `body-parser`
* `res.redirect()`
* `app.use(bodyParser.json()) // for parsing application/json`
* `app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded`

## Lesson 5: nodemon

`npm install --save-dev nodemon`

```json
"scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

## Lesson 6: Use a bit of lowdb

`npm install --save lowdb`

## Lesson 7: View User

`npm install --save shortid`

params of url
`app.get('/users/:id', (req, res) => {} )`
 `&nbsp;` is space character in HTML code
  