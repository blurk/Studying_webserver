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

## Lesson 14: Cookie

1st time: server set cookie to client

after 1st time: client sends cookie back to server and server can read that cookie

middleware to read cookie `npm install --save cookie-parser`

put this in index.js

```javascript
var cookieParser = require('cookie-parser')
app.use(cookieParser())
```

Application:

* For Authentication
* Save session id

## Lesson 15: Authentication (Login)

* Never save password in readable form

Create separate folder for authentication

use

```javascript
const authMiddleware = require('./middleware/auth.middleware')
app.use('/users', authMiddleware.requireAuth ,userRoute)
```

in index.js

* always redirect wrong user to login page

## Lesson 16: md5

```javascript
const md5 = require('md5');
let hashedPassword = md5(password);
```

use md5 for simple encrypt

## Lesson 17 - Signed Cookie

use `res.locals.user = user;` in auth.controller.js so can use user variable in every pug files in view/

```javascript
//index.js
app.use(cookieParser('adaadadknsdnasdlandlasd'))//pass secret to cookieParser()
//auth.controller.js
 res.cookie('userId', user.id, {
        signed: true
    });
```

use signedCookies to avoid hacking

## Lesson 18: Environment Variables

env: development -> staging -> product

```javascript
//output all env variables
console.log(process.env)

//add env var in terminal
SESSION_SECRET=123456 APP_SECRET=adadadadskadk npm start

//in index.js
app.use(cookieParser(process.env.SESSION_SECRET)))

//use separate file for env vars
npm isntall --save dotenv

// remember to add .env to .gitignore
//require dotenv as soon as possible -> just put it on head of index.js
require('dotenv').config();
```

note **never commit secret things or db to git**

## Lesson 19: Debug Nodejs App

put this in `package.json` file : `"start": "nodemon --inspect index.js",`

Nodejs icon will show on chrome developer tools

## Lesson 20: Pagination

The concept(I guess):
  All items are in an array called `arr`
  Get `x` items in `arr` and put it in `n`th page
  Use `arr.prototype.slice()` to get items
  `begin = (n-1) * x`
  `end = n*x || begin + x`
  items = arr.slice(begin, end)

For example:
  Have an array with 10 items
  Show 3 items per page: x = 3
  Then at 1st page: n = 1
  Begin: (1 - 1)*3 = 0
  End: 1*3 || 0+3 = 3
  Get items: `arr.slice(0,3) //arr[0], arr[1], arr[2]`

## Lesson 21: File Upload

`body-parser` not support for file upload so we will use `npm install --save multer`

HTML `<form>` enctype Attribute: specifies how the form-data should be encoded when submitting it to the server.  

### Note: The enctype attribute can be used only if method="post"

|Value|Description|
|---|---|
|application/x-www-form-urlencoded|Default. All characters are encoded before sent (spaces are converted to "+" symbols, and special characters are converted to ASCII HEX values)|
|multipart/form-data|No characters are encoded. This value is required when you are using forms that have a file upload control|
|text/plain|Spaces are converted to "+" symbols, but no special characters are encoded|

### Multer

Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
