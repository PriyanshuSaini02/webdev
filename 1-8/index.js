const express = require('express');
const app = express();
const hbs = require('hbs');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cloudinary config (replace with your credentials)
cloudinary.config({
    cloud_name: 'YOUR_CLOUD_NAME',
    api_key: 'YOUR_API_KEY',
    api_secret: 'YOUR_API_SECRET'
});

// Multer temp storage for uploading before sending to Cloudinary
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const tempPath = path.join(__dirname, 'temp');
        if (!fs.existsSync(tempPath)) {
            fs.mkdirSync(tempPath, { recursive: true });
        }
        cb(null, tempPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// File upload route with Cloudinary
app.post('/profile', upload.single('avatar'), async function (req, res) {
    try {
        console.log(req.body);
        console.log(req.file);

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'profile_pics' // Optional folder in Cloudinary
        });

        console.log('Cloudinary URL:', result.secure_url);

        // Delete temp file after upload
        fs.unlinkSync(req.file.path);

        res.send(`Uploaded to Cloudinary: <a href="${result.secure_url}" target="_blank">${result.secure_url}</a>`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Cloudinary upload failed');
    }
});

// HBS setup
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

// Routes
app.get("/", (req, res) => {
    res.render('home.hbs', {
        firstname: "Priyanshu",
        lastname: "Saini"
    });
});

app.get("/products", (req, res) => {
    res.render('products.hbs', {
        products: ["Watch", "Shirts", "Sunglasses"]
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
