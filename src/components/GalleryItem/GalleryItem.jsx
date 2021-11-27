import {useState} from 'react';
import swal from 'sweetalert';

function GalleryItem(props) {
    console.log('gallery item props', props)
    const [showDescription, setShowDescription] = useState(false);
    const [likeCounter, setLikeCounter] = useState(0);
    const [deleteButton, setDeleteButton] = useState(false);

    const changeText = () => {
        setShowDescription(!showDescription);
    };

    const increaseLikes = () => {
        setLikeCounter(likeCounter + 1);
    };

    // const deleteImage = () => {
    //     swal({
    //         title: "Are you sure?",
    //         text: "Once deleted, you will not be able to recover this image!",
    //         icon: "warning",
    //         buttons: true,
    //         dangerMode: true,
    //       })
    //       .then((willDelete) => {
    //         if (willDelete) {
    //           swal("Poof! Your image has been deleted!", {
    //             icon: "success",
    //           });
    //           setDeleteButton(!deleteButton)
    //         } else {
    //           swal("Your image is safe!");
    //         }
    //       });
    // }

    return (
        <>
            {deleteButton ? 
                <></>
                :
                <div className="catImage">
                    {showDescription ?
                        <p onClick={changeText} className="description">{props.image.description}</p> 
                        :
                        <img onClick={changeText} src={props.image.path}/>
                    }
                    <p>{likeCounter} Likes</p>
                    <button onClick={increaseLikes}>Like 💕</button>
                    <button onClick={() => props.deleteImage(props.image.id)}>Delete 🗑</button>
                </div>

            }
        </>
    )
}

export default GalleryItem;