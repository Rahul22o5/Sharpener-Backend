
function getAllProducts(){
    return "Fetching all products";
}
function getProductById(id){
    return `Fetching product with id ${id}`;
}
function addProduct(product){
    return "Adding a new product";
}
module.exports={
    getAllProducts,
    getProductById,
    addProduct
}