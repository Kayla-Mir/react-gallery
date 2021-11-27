import {useState} from 'react';

function GalleryItem({image}) {
    const [showDescription, setShowDescription] = useState(false);
    const [likeCounter, setLikeCounter] = useState(0);
    const [deleteButton, setDeleteButton] = useState(false);

    const changeText = () => {
        setShowDescription(!showDescription);
    };

    const increaseLikes = () => {
        setLikeCounter(likeCounter + 1);
    };


    return (
        <>
            {deleteButton ? 
                <></>
                :
                <div className="catImage">
                    {showDescription ?
                        <p onClick={changeText} className="description">{image.description}</p> 
                        :
                        <img onClick={changeText} src={image.path}/>
                    }
                    <p>{likeCounter} Likes</p>
                    <button onClick={increaseLikes}>Like 💕</button>
                    <button onClick={() => setDeleteButton(!deleteButton)}>Delete 🗑</button>
                </div>

            }
        </>
    )
}

export default GalleryItem;