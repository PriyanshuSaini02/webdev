const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
// const routerBird=require("./router")
// const m1=function(req,res,next){
//     console.log("m1")
//     next();
// }
// const m2 = function (req, res, next) {
//     console.log("m2")
//     next();
// }
// app.get("/", (req, res) => {
//     // console.log("home route")
//     res.send("this is home route")
// })
// app.post("/", (req, res) => {
//     // console.log("home route")
//     res.send("this is post route")
// })
// app.get("/", (req, res) => {
//     // console.log("home route")
//     res.send("this is put route")
// })
// app.use("/abcd",routerBird)
// const myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
// }

// app.use(myLogger)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.get('/home', (req, res) => {
//     res.send('Hello World!')
// })

// app.use('/user/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     res.send("ok")
//     // next()
// })
// a middleware function with no mount path. This code is executed for every request to the router
// router.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
// })

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
// router.use('/user/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     res.send("ok")
//     // next()
// })

// // a middleware sub-stack that handles GET requests to the /user/:id path
// // router.get('/user/:id', (req, res, next) => {
// //     // if the user ID is 0, skip to the next router
// //     if (req.params.id === '0') next('route')
// //     // otherwise pass control to the next middleware function in this stack
// //     else next()
// // }, (req, res, next) => {
// //     // render a regular page
// //     res.render('regular')
// // })

// // handler for the /user/:id path, which renders a special page
// router.get('/user/:id', (req, res, next) => {
//     console.log(req.params.id)
//     res.render('special')
// })

// // mount the router on the app
// app.use('/', router)



// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.sendStatus(500)
// })

// app.use("/",(req,res)=>{
//     console.log("enter correct path")
//     res.sendStatus(404)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
