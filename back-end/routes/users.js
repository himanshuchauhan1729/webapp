const router = require("express").Router();
const User = require("../db/User");
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-camox';

router.post("/login",async (req,res)=>{
    if(req.body.email && req.body.password){

        let user = await User.findOne(req.body).select("-password");
        if(user){
            
            Jwt.sign({user},jwtKey,{expiresIn: "2h"},(err,token)=>{
                if(err){
                    res.send({result: "something went wrong, Please try after sometime"});
                }
                res.send({user, auth: token});
            })
            
        }else{
            res.send({result:'No user found'});
        }
    }else{
        res.send("Please enter email and password")
    }
})

router.post("/register",async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save()
    result = result.toObject();
    delete result.password;
    Jwt.sign({result},jwtKey,{expiresIn: "2h"},(err,token)=>{
        if(err){
            res.send({result: "something went wrong, Please try after sometime"});
        }
        res.send({result, auth: token});
    })
})


module.exports = router;

