const express = require('express')

const app = express()

app.use(express.static('public'))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server successfully started on ${port}`)
})

app.get('/', function(req, res) {
    res.send('hello world');
});