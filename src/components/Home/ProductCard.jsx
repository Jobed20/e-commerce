import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../components/UTIL/getConfig'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    const addToProductId = (e) => {
        e.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

        const objectProduct = {
            id: product.id,
            quantity: 1,
        }
        axios.post(URL, objectProduct, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCart())
        })
        .catch(err => console.log('err'))

    }
    

    const navigate = useNavigate()

    const goToProductId = () => navigate(`/product/${product.id}`)

    return (
        <article 
        className="card-product"
        onClick={goToProductId}>
            <header className='card-product__header'>
                <img 
                className='card-product__img-back' 
                src={product.productImgs[1]} 
                alt="Product" 
                />
                <img 
                className='card-product__img' 
                src={product.productImgs[0]} 
                alt="Product" 
                />
            </header>
            <div className='card-product__body'>
                <h2 className='card-product__title'>{product.title}</h2>
                <div className='card-product__price-container'>
                    <h3 className='card-product__price-label'>Price:</h3>
                    <p className='card-product__price-number'>$ {product.price}</p>
                </div>
                <button onClick={addToProductId} className='card__product__btn'>
                    <i className="fa-solid fa-cart-arrow-down"></i>
                </button>
            </div>
        </article>
    )
}

export default ProductCard