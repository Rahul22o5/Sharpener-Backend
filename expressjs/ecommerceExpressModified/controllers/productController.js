const getProducts =(req,res)=>{
    res.send("Fetching all Product")
}
const getProductById =(req,res)=>{
    const id=req.params.id;
    res.send(`Fetching Product with id ${id}`)
}
const addProduct =(req,res)=>{
    res.send("Adding a new product")
}
const updateProduct =(req,res)=>{
    const id=req.params.id;
    res.send(`Updating Product with id ${id}`)
}
const deleteProduct =(req,res)=>{
    const id=req.params.id;
    res.send(`Deleting Product with id ${id}`)
}
module.exports={
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}