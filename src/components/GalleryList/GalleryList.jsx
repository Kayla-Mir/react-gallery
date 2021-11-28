import './GalleryStyle.css'
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList(props) {
    return (
        <div>
            <p>Gallery goes here</p>
            {props.galleryImages.map(image => (
                <GalleryItem
                    key={image.id}
                    image={image}
                    deleteImage={props.deleteImage}
                    likeCounter={props.likeCounter}
                />
            ))}
        </div>
    )
}

export default GalleryList;