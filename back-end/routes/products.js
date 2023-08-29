const router = require("express").Router();

const Product = require("../db/Product");

router.post("/add-product",async (req,res)=>{
    let product = new Product(req.body);
    let result = await product.save()

    res.send(result)
})

router.get("/products",async (req,res)=>{
    let products = await Product.find();

    if(products.length > 0){
        res.send(products)
    }else{
        res.send({result: "No Product Found"})
    }
})

router.delete("/product/:id",async (req,res)=>{
    const result = await Product.deleteOne({_id:req.params.id});

    res.send(result);
})

router.get("/search/:key",async(req,res)=>{
    let result = await Product.find({
        "$or":[
            {title:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {description:{$regex:req.params.key}},
            {price:{$regex:req.params.key}}
        ]
    })
    res.send(result);
})

module.exports = router;