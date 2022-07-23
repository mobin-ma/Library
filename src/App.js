import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Library from './Components/Library/Library';
import Loading from './Components/Loading/Loading';

function App() {
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    setLoading(true);
  }, [])

  return (
    <>
      <Header />
      {!loading ? (<Loading />) :
        (
          <Library />
        )}
    </>
  );
}

export default App;
