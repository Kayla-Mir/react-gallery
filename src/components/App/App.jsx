import React, { useEffect, useState } from 'react';
import './App.css';

import Axios from 'axios';
import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';
import ImageForm from '../ImageForm/ImageForm.jsx'
import swal from 'sweetalert';


function App() {
  const [galleryImages, setGalleryImages] = useState([]);

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
      swal({
        title: "Error!",
        text: "Cannot delete images at this time!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      console.error('GET /gallery error', err);
    })
  }

  const likeCounter = (id) => {
    Axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then((res) => {
      getImages();
    }).catch((err) => {
      swal({
        title: "Error!",
        text: "Cannot update images at this time!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      console.error('PUT /gallery error', err);
    })
  }

  const addImage = (newImage) => {
    Axios({
      method: 'POST',
      url: '/gallery',
      data: newImage
    }).then((res) => {
      getImages();
    }).catch((err) => {
      swal({
        title: "Error!",
        text: "Cannot update images at this time!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      console.error('PUT /gallery error', err);
    })
  }

  const deleteImage = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this image!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your image has been deleted!", {
          icon: "success",
        });
        Axios({
          method: 'DELETE',
          url: `/gallery/${id}`
        }).then((res) => {
          getImages();
        }).catch((err) => {
          swal({
            title: "Error!",
            text: "Cannot delete images at this time!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
          console.error('DELETE /gallery error', err);
        })
      } else {
        swal("Your image is safe!");
      }
    });
  }

  return (
    <div className="App">
      <Header />
      <ImageForm addImage={addImage}/>
      <GalleryList
        galleryImages={galleryImages}
        deleteImage={deleteImage}
        likeCounter={likeCounter}
      />
    </div>
  );
}

export default App;
