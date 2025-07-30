const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const router = express.Router()
const birds = require('./bird')

// app.all('/user', (req, res,next) => {
//     res.send('user 2')
//     next()
// })

// app.get('/', (req, res) => {
//     res.send('user 1')
// })
// app.get('/[discussion|page]/:slug', async (req, res) => {
//     res.status(200).send('ok')
// })

// app.get(['/discussion/:slug', '/page/:slug'], async (req, res) => {
//     res.status(200).send('ok')
// })

// app.get('/example/a', (req, res) => {
//     res.send('Hello from A!')
// })

// app.get('/example/b', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
// }, (req, res) => {
//     res.send('Hello from B!')
// })

// const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
// }

// const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
// }

// const cb2 = function (req, res) {
//     res.send('Hello from C!')
// }

// app.get('/example/c', [cb0, cb1, cb2])

// const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
// }

// const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
// }

// app.get('/example/d', [cb0, cb1], (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
// }, (req, res) => {
//     res.send('Hello from D!')
// })


// const chappalCheck=function(req,res,next){
//     console.log("chappal utao")
//     next()
// }

// const prashad = function (req, res, next) {
//     console.log("prasad purchase")
//     next()
// }

// const pooja = function (req, res, next) {
//     console.log("pooja")
//     next()
// }

// app.get('/temple', chappalCheck,prashad,pooja,(req, res) => {
//     res.send('visit')
// })

// app.route('/book')
//     .get((req, res) => {
//         res.send('Get a random book')
//     })
//     .post((req, res) => {
//         res.send('Add a book')
//     })
//     .put((req, res) => {
//         res.send('Update the book')
//     })


// app.use('/birds', birds)


const m1=function(req,res,next){
    console.log("m1")
    next();
}
const m2 = function (req, res, next) {
    console.log("m2")
    next();
}
// app.get("/home",m1,m2,(req,res)=>{
//     console.log("home route")
//     res.send("this is home route")
// })

router.get("/login",m1,m2,(req,res)=>{
    console.log("this is login router")
    res.send("this si login page")
})
app.use("/",router)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
