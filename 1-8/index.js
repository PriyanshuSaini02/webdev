const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
// const hbs=require('hbs');

// app.response.sendStatus = function (statusCode, type, message) {
//     return this.contentType(type)
//         .status(statusCode)
//         .send(message)
// }

// app.get("/",(req,res)=>{
//     res.sendStatus(200, 'text/plain', '{"message":"ok"}')

// })

// app.get("/error", (req, res) => {
//     res.sendStatus(400, 'text/plain', '{"error":"error"}')

// })
// app.get("/unauthorized", (req, res) => {
//     res.sendStatus(401, 'text/plain', '{"error":"unauthorized"}')
// })
// app.get("/notfound", (req, res) => {
//     res.sendStatus(404, 'application/json', '{"error":"resource not found"}')
// })
// app.get("/internal", (req, res) => {
//     res.sendStatus(500, 'text/plain', '{"error":"internal"}')

// })


var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) { });

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


app.get("/", (req, res) => {
    res.render('home.hbs', {
        firstname: "Priyanshu",
        lastname: "Saini Sir"
    })
})


app.get("/products", (req, res) => {
    res.render('products.hbs', {
        products: [
            "Watch",
            "Shirts",
            "Sunglasses",
        ],
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
