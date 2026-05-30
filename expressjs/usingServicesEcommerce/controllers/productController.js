const productService=require('../service/productService')

const getProducts =(req,res)=>{
    res.send(productService.getAllProducts())
}
const getProductById =(req,res)=>{
    const id=req.params.id;
    res.send(productService.getProductById(id))
}
const addProduct =(req,res)=>{
    res.send(productService.addProduct(req.body))
}
module.exports={
    getProducts,
    getProductById,
    addProduct,
}