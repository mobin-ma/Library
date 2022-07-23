import React from 'react';
import './ProductPage.css';
import imgBook from '../../assets/content.jpg'

const ProductPage = () => {
    return (
        <div className='product'>
            <button className='btn-close' onClick={() => {document.querySelector('.product').classList.remove('active-product')}}>X</button>
            <div className='product-left'>
                <img src={imgBook} alt='' />
            </div>
            <div className='product-right'>
                <div>
                    <h1 className='product-title'>React.js Essentials</h1>
                </div>
                <div>
                    <p className='product-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque</p>
                </div>
                <div>
                    <button  className='product-button' >Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;