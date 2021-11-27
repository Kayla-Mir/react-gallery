import { useState } from 'react';

function GalleryItem(props) {
    console.log('gallery item props', props)
    const [showDescription, setShowDescription] = useState(false);
    const [deleteButton, setDeleteButton] = useState(false);

    const changeText = () => {
        setShowDescription(!showDescription);
    };

    return (
        <>
            {deleteButton ?
                <></>
                :
                <div className="catImage">
                    {showDescription ?
                        <p onClick={changeText} className="description">{props.image.description}</p>
                        :
                        <img onClick={changeText} src={props.image.path} />
                    }
                    <p>{props.image.likes} Likes</p>
                    <button onClick={() => props.likeCounter(props.image.id)}>Like 💕</button>
                    <button onClick={() => props.deleteImage(props.image.id)}>Delete 🗑</button>
                </div>

            }
        </>
    )
}

export default GalleryItem;