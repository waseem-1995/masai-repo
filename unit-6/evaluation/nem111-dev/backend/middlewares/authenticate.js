const jwt = require("jsonwebtoken")
require("dotenv").config();

const authenticate = (req,res,next) =>{
const token = req.headers.authorization;
if(token){
    const decoded = jwt.verify(token, "masai");
    if(decoded){
        const userID = decoded.userID;
        req.body.userID = userID;
        next();
    }else{
        res.status(400).send({"err": "Please login first"})
    }
}else {
    res.status(400).send({"err": "Please login first"})
}
}

module.exports = {
    authenticate
}