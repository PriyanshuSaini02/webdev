const express = require('express')
const app = express()

var hbs = require('hbs');
const multer = require('multer')
const fs = require('fs');
const path = require('path');
// const upload = multer({ dest: 'uploads/' })
// var diskStorage = require('./storage/disk')
// var memoryStorage = require('./storage/memory')
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

const uploadPath = path.join(__dirname, 'uploads');

// Ensure folder exists
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/main/webdev/1-8/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    app.use(express.urlencoded({extended:true}))
    console.log(req.body);
    console.log(req.file);
    return res.redirect('/')
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})

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
