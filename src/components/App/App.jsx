import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';
import ImageForm from '../ImageForm/ImageForm.jsx';
import swal from 'sweetalert';


function App() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    getImages(); // calls getImages on page load
  }, []); //stops the page from rerendering after every update

  // sends a GET request to the server and receives the images array as a response
  const getImages = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((res) => {
      setGalleryImages(res.data); //sets our piece of state to the response from the server so we can use it
    }).catch((err) => {
      swal({ //fancy new alerts
        title: "Error!",
        text: "Cannot delete images at this time!",
        icon: "error",
        buttons: true,
        dangerMode: true,
      });
      console.error('GET /gallery error', err);
    })
  }

  // sends a put request with the id of the image we clicked on to increase the like counter
  const likeCounter = (id) => {
    Axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then((res) => {
      getImages(); //calls getImages again to rerender the page
    }).catch((err) => {
      swal({ 
        title: "Error!",
        text: "Cannot update images at this time!",
        icon: "error",
        buttons: true,
        dangerMode: true,
      });
      console.error('PUT /gallery error', err);
    })
  }

  // sends a POST request to the server to add a new image with the data that was sent over from ImageForm.jsx
  const addImage = (newImage) => {
    Axios({
      method: 'POST',
      url: '/gallery',
      data: newImage // newImage is the data collected from ImageForm.jsx
    }).then((res) => {
      getImages(); // rerenders the images with the new one at the bottom
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

  // sends a DELETE request to the server with the id of the image where the delete was clicked on
  const deleteImage = (id) => {
    swal({ // i set up a sweet alert to ask the user to make sure, its built in functionality will stop the request if they choose cancel
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
        Axios({ // if they choose to confirm the delete the DELETE request goes through with the id of the image being sent here
          method: 'DELETE',
          url: `/gallery/${id}`
        }).then((res) => {
          getImages();
        }).catch((err) => {
          swal({
            title: "Error!",
            text: "Cannot delete images at this time!",
            icon: "error",
            buttons: true,
            dangerMode: true,
          });
          console.error('DELETE /gallery error', err);
        })
      } else { // if they choose not to delete a pop up will happen
        swal("Your image is safe!");
      }
    });
  }

  // various components with info being sent along with them
    // ImageForm has the function addImage being sent with it
    // GalleryList has two functions being sent, deleteImage and likeCounter
    // it also has the galleryImages being sent for rendering
  return (
    <div className="App">
      <Header />
      <ImageForm addImage={addImage} /> 
      <GalleryList
        galleryImages={galleryImages}
        deleteImage={deleteImage}
        likeCounter={likeCounter}
      />
    </div>
  );
}

export default App;
