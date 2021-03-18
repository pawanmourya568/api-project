const express = require('express')
const  app = express()
port = process.env.PORT || 3000

app.get('/', (req,res)=> {
    res.send("welcome to my youtube chanel")
})

app.get('/menu', (req,res)=> {
    res.send("this is menu page")
})
app.listen(port, ()=> {
    console.log("listning")
})