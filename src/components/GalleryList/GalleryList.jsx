import GalleryItem from '../GalleryItem/GalleryItem.jsx';

// GalleryList loops through the images that were sent over as galleryImages
    // every item it loops over is going to go through another component
    // with additional information being sent 
function GalleryList(props) {
    return (
        <div>
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