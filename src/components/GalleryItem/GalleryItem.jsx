import {useState} from 'react';

function GalleryItem({image}) {
    const [showDescription, setShowDescription] = useState(false);

    const changeText = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="catImage">
            {showDescription === false ? <img onClick={changeText} src={image.path}/> 
            :
             <p onClick={changeText} className="description">{image.description}</p>} <br/>
            <button>Like 💕</button>
            <button>Delete 🗑</button>
        </div>
    )
}

export default GalleryItem;