const express = require('express')
const app = express()
const port = 3000
const path = require('path');

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.get('/user', (req, res) => {
//     res.send('this is a user')
// })

// app.post('/user', (req, res) => {
//     res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
// })

// app.use('/', (req, res) => {
//     res.send('Hello World!')
// })

// Serve static files from 'public' at root
app.use(express.static('public'));

// Serve static files from 'public' at '/static' route
app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.send('<img src="/public/kitten.jpeg" alt="Cute Kitten">');
});

// app.use('/user', (req, res) => {
//     res.send('user 2')
// })

// app.all('/user2', (req, res) => {
//     res.send('user 1')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
