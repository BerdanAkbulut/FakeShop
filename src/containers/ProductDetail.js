import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions'
const ProductDetail = () => {
    const {productId} = useParams()
    const dispatch = useDispatch()
    const product = useSelector((state)=> state.product)
    

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=> {
            console.log(err)
        })
        dispatch(selectedProduct(response.data))
    }

    useEffect(()=> {

       fetchProductDetail()
       return () => {
           dispatch(removeSelectedProduct())
       }
    },[productId])

    const {rating} = product
    
    return (
        <div class="ui three column grid">
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src={product.image}/>
            </div>
            <div class="content">
              <a class="header">{product.title}</a>
            </div>
          </div>
          </div>

          <div className="column">

            <br/>
            <h1>Ürün Detayları</h1>
            <br/>
            <h3>Ürün Adı : {product.title} </h3>
            <br/>
            <h3>Ürün Kategorisi :{product.category}</h3>
            <br/>
            <h3>Ürün Fiyatı :{product.price} </h3>
            <br/>
            <h3>Ürün Açıklaması : {product.description} </h3>
            <br/>

           
            
          </div>


          </div>

    )
}

export default ProductDetail
