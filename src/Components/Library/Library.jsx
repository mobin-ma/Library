import axios from 'axios';
import React, { useState } from 'react';
import Card from '../Card/Card';
import ProductPage from '../ProductPage/ProductPage';
import './Library.css';

const Library = () => {

  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState([]);

  const searhBook = (evt) => {
    if(evt.key === 'Enter') {
      evt.preventDefault()
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAW6g9Sgn07txRffw5E7nu3any6kuSqRIo')
      .then(res => setBookData(res.data.items))
      .then(err => setBookData.log(err))
    }
  }

  return (
    <>
      <div>
        <form className='form'>
          <h1>Please search for the book you want</h1>
          <input
            type="text"
            placeholder='Search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searhBook}
          />
        </form>
      </div>
      <Card bookData={bookData}/>
      <ProductPage bookData={bookData}/>
    </>
  )
}

export default Library;