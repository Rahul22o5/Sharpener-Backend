const getCartForUser = (req,res)=>{
    res.send(`Fetching cart for user with ID: ${req.params.id}`)
}

const addProductToCart = (req,res)=>{
    res.send(`Adding product to cart for user with ID: ${req.params.id}`);
}

module.exports = {
    getCartForUser,
    addProductToCart
}