const getAllProducts =(req,res)=>{
    res.send("Fetching all Product")
}
const getProductById =(req,res)=>{
    const id=req.params.id;
    res.send(`Fetching Product with id ${id}`)
}
const addProduct =(req,res)=>{
    res.send("Adding a new product")
}
module.exports={
    getAllProducts,
    getProductById,
    addProduct,
}