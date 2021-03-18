const express = require('express')
const  app = express()

app.get('/', (req,res)=> {
    res.send("welcome to my youtube chanel")
})

app.listen(3000, ()=> {
    console.log("listning")
})