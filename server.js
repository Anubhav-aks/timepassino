const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const app = express();
const PORT=process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist/Rock-Paper-Scissors')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Rock-Paper-Scissors/index.html'))
})

app.listen(PORT, () => {

    console.log('Server running at port '+PORT)
})