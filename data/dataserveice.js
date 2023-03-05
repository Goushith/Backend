const db = require('./db')

const addtable=(fname,lname,job,number)=>{
return db.User.findOne()
.then(user=>{
    const newUser = new db.User({
        fname:fname,
        lname:lname,
        job:job,
        number:number
    })
    newUser.save();
    return {
        status:true,
        statusCode:200,
        message:'user registered'
      }
})

}



const getdetails=()=>{
    return db.User.find()
    .then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    users:result
                }
            }else{
                return{
                    status:false,
                    statusCode:400,
                    message:'no details'
                }
            }
        }
    )
}

module.exports={
    addtable,
    getdetails
}