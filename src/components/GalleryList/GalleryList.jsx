import './GalleryStyle.css'
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList(props) {
    console.log('galleryList props', props.galleryImages)
    return (
        <div>
            <p>Gallery goes here</p>
            {/* <GalleryItem galleryImages={galleryImages}/> */}
            {props.galleryImages.map(image => (
                <GalleryItem 
                    key={image.id} 
                    image={image}
                    deleteImage={props.deleteImage}    
                />
            ))}
        </div>
    )
}

export default GalleryList;