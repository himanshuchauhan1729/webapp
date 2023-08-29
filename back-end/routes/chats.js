const router = require("express").Router();
const Chat = require("../db/Chat");

//add messages

router.post("/",async (req,res)=>{
    const newMessage = new Chat(req.body);
    try{
        const savedMessage = await newMessage.save()
        res.status(200).json(savedMessage);
    }catch(err){
        res.status(500).json(err);
    }
})

//get messages

router.get("/:conversationId",async (req,res)=>{
    try{
        const data = await Chat.find({
            conversationId: req.params.conversationId
        })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;