const express = require('express')
const dataservice =  require('./data/dataserveice')
const cors = require('cors')
const app = express()
app.use(express.json())



app.use(cors({
    origin:'http://localhost:4200'
}))

app.listen(3000,()=>{
    console.log('connecting to port 3000');
})





app.post('/addtable' , (req,res)=>{
    dataservice.addtable(req.body.fname,req.body.lname,req.body.job,req.body.number)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

}) 


app.get('/getdetails',(req,res)=>{
    dataservice.getdetails()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})