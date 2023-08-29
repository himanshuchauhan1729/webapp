import React from "react"
import {useEffect,useState} from "react"
import "./Products.css";

import tableImage from "../img/table.jpg"
// import faker from 'faker';


const Product = ()=>{
    const[products,setProducts] = useState([]);
    const[expand,setExpand] = useState(false);
    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async ()=>{
        let data = await fetch("http://localhost:5000/product/products");
        let result  = await data.json();
        setProducts(result);
    }


    // const productWithImages = products.map((product)=>({
    //     ...product,
    //     image: faker.image.imageUrl(),
    // }))

    console.log("products",products);

    // const deleteProduct = (id)=>{
    //     console.log("delete: "+id)
    // }

    // const updateProduct = (id)=>{
    //     console.log("update: "+id)
    // }

    const expandCard = ()=>{
        setExpand(true);
        console.log(expand);
    }

    const searchProduct = async (event)=>{
        let key = event.target.value;

        if(key){
            let result = await fetch(`http://localhost:5000/product/search/${key}`);
            result = await result.json();

        if(result){
            setProducts(result);
        }
        }else{
            getProducts();
        }
    }

    return (
        <div className="product-box" onClick={()=>{console.log("product clicked")}}> 

            <input onChange={searchProduct} className="search-product" type="text" placeholder="Search Product eg. Mobile, Keyboard etc" />
            
            <div className="product-card">
            {
               products.length > 0 ? products.map((item)=>
               <ul className="product-list" onClick={expandCard}>
                        <div className="product-img">

                        <img src={tableImage} alt="product" />
                        </div>

                        <div className="product-details">

                        <li className="product-title">{item.title}</li>
                        <li className="product-description">{item.description}</li>
                        <li className="product-category">{item.category}</li>
                        <li className="product-price">{item.price}</li>
                        </div>
                        {/* <li><button onChange={()=>{deleteProduct(item._id)}}>Delete</button></li>
                        <li><button onClick={()=>{updateProduct(item._id)}}>Update</button></li> */}
                    </ul>
                    
                )
                :
                <h3>No result found</h3>
            }
            </div>

            
        </div>
    )
}

export default Product;