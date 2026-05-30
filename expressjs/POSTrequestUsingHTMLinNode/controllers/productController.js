const path = require("path")

const getProducts =(req,res)=>{
    res.sendFile(path.join(__dirname, "../view/product.html"))
}
const postProduct =(req,res)=>{
    const data = req.body
    res.json({
        value:data.productName
    })
}

module.exports={
    getProducts,
    postProduct
}