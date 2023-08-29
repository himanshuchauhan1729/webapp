const router = require("express").Router();
const Conversation = require("../db/Conversation");

//creating new conversation
router.post("/",async (req,res)=>{

    let data = new Conversation({
        members: [req.body.senderId,req.body.receiverId] 
    })

    try{
        const result = await data.save();
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err);
    }
})


//find conversation
router.get("/:userId",async (req,res)=>{
    
    try{

        const conversation = await Conversation.find({
            members: {$in: [req.params.userId]}

        });
        res.status(200).json(conversation)

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;