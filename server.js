const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res)=>{
    const name = req.query.name
    if (name) {res.send('kiaora '+ name)}
    else {res.send('kiaora')}
})

//go to route form to see the form. After you enter the name and hit submit, it will take you to the postForm route below and print out hi + 'the name you've just entered'
app.get('/form', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})


app.post('/postForm', (req, res)=>{
    res.send('Hi '+ req.body.manamana)
})
module.exports = {app}