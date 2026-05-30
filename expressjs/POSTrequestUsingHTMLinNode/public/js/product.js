function onSubmitHandler(e){ 
    e.preventDefault()
    console.log("Form Submitted")
    const productName = e.target.productName.value

    const data = {
        productName: productName
    }

    axios.post("http://localhost:3000/api/products", data)
    .then((result)=>{
        console.log("Value returned:", result.data.value)
    })
}