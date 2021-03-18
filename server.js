const express = require('express')
const  app = express()

app.get('/', (req,res)=> {
    res.send("welcome to my youtube chanel")
})

app.get('/menu', (req,res)=> {
    res.send("this is menu page")
})
app.listen(3000, ()=> {
    console.log("listning")
})