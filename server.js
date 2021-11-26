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

module.exports = {app}