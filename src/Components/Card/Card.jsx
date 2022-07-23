import React from 'react';
import ProductPage from '../ProductPage/ProductPage';
import './Card.css';

const Card = ({ bookData }) => {


    return (
        <div className='library'>
            <div className='row'>
                {
                    bookData.map((item, index) => {

                        let imgAPI = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        let titleAPI = item.volumeInfo.title;
                        return (
                            <>
                                <div className='card' key={index}>
                                    <div className="card-header">
                                        {
                                            !imgAPI ? (<div className='img-nth'>400X400</div>) :
                                                (<img src={imgAPI} alt="" />)
                                        }
                                    </div>
                                    <div className="card-body">
                                        <h2>{titleAPI}</h2>
                                    </div>
                                    <div className="card-footer">
                                         <button onClick={() => {document.querySelector('.product').classList.toggle('active-product')}}>Viwe</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card;