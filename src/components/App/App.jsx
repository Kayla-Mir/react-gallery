import React, { useEffect, useState } from 'react';
import './App.css';

import Axios from 'axios';
import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx'


function App() {
  let [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((res) => {
      setGalleryImages(res.data)
    }).catch((err) => {
      alert('Error getting images!')
      console.error('GET /gallery error', err)
    })
  }

    return (
      <div className="App">
        <Header />
        <GalleryList galleryImages={galleryImages}/>
      </div>
    );
}

export default App;
