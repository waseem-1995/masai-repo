const mongoose=require("mongoose")


const userSchmea=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    gender:{type:String,required:true}
},
{
    versionKey:false
}
)

const userModal=mongoose.model("user",userSchmea)

module.exports={
    userModal
}