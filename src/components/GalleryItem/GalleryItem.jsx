import { useState } from 'react';

function GalleryItem(props) {
    const [showDescription, setShowDescription] = useState(false);

    const changeText = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="catImage">
            {showDescription ?
                <div onClick={changeText} className="descriptionContainer">
                    <p className="description">{props.image.description}</p>
                </div>
                :
                <div className="imageDiv">
                    <img onClick={changeText} src={props.image.path} />
                </div>
            }
            <p>{props.image.likes} Likes</p>
            <button onClick={() => props.likeCounter(props.image.id)}>Like 💕</button>
            <button onClick={() => props.deleteImage(props.image.id)}>Delete 🗑</button>
        </div>
    )
}

export default GalleryItem;