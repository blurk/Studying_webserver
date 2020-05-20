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

## Lesson 12: Server-side validation (Login)

## Lesson 13: Middleware

**Middleware** functions are functions that have access to the `request object` (req), the `response object` (res), and the `next middleware` function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware function in the stack.
An Express application can use the following types of middleware:

* Application-level middleware
* Router-level middleware
* Error-handling middleware
* Built-in middleware
* Third-party middleware

Middleware will run step by step when use next(), else just run the 1st one

![Middleware img](public\images\middlewareImg.png)

`res.locals()`: An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to app.locals.

This property is useful for exposing request-level information such as the request path name, authenticated user, user settings, and so on.

Or simply: save date in request, can use for passing values between middlewares
