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
  
## Lesson 8: Express Router

  A lot of things to do at this
  Reconstructor files and folder

## Lesson 9: Controller(MVC)

  Logic stuff should be with Controller
  File and folder looking neat now

## Lesson 10: Template layout pug

 `extends` path to file pug

 `block` meaning name here

 The content will be replace after the block block_name
 If there is no content at the inherite file, the content in the parent still there

## Lesson 11: Static Files

  Has `public/` now
  Users can accses any files here
  use static path with static file
  they will start form `public/`
