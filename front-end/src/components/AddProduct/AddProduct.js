import React from "react"
import "./AddProduct.css";
import "../.././color.css";
const AddProduct = ()=>{

    const [title,setTitle] = React.useState("");
    const [description,setDescription] = React.useState("")
    const [price,setPrice] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [error,setError] = React.useState(false);
    const addProduct = async ()=>{
        if(!title || !description || !price || !category){
            setError(true)
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;

       let data = await fetch("http://localhost:5000/add-product",{
        method: "post",
        body: JSON.stringify({title,description,price,category,userId}),
        headers: {
            "Content-Type":"application/json"
        }
       })
       let result = await data.json();
       
       console.log(result)
        
    }

    const uploadImg = (e)=>{
        console.log(e.target.files[0]);
    }

    return (
        <div className="product-container">
            <h2 style={{color: "var(--dark-blue-color)", marginBottom:"0px"}}>
                Add Product
            </h2>

        <div className="add-product">
            <input type="file" multiple id="file-input" max-length="4" required className="upload-img" onChange={uploadImg}/>
            <label htmlFor="file-input">Upload Images</label>
            {/* {error && !image && <span className="validation">No File Choosen</span>} */}
            <input type="text" placeholder="Enter product title" required className="inputBox" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            {error && !title && <span className="validation">Enter valid title</span>}
            <input type="text" placeholder="Description to you product" required className="inputBox" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            {error && !description && <span className="validation">Enter valid description</span>}
            <input type="text" placeholder="Price" className="inputBox" required value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            {error && !price && <span className="validation">Enter valid price</span>}
            <input type="text" placeholder="Category" className="inputBox" required value={category} onChange={(e)=>{setCategory(e.target.value)}} />
            {error && !category && <span className="validation">Enter valid category</span>}
            <button type="button" className="appButton" onClick={addProduct}>Add Product</button>
        </div>
            
        </div>
    )
}

export default AddProduct;
