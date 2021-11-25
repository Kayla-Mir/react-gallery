import './GalleryStyle.css'
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({galleryImages}) {
    console.log(galleryImages)
    return (
        <div>
            <p>Gallery goes here</p>
            {/* <GalleryItem galleryImages={galleryImages}/> */}
            {galleryImages.map(image => (
                <GalleryItem key={image.id} image={image}/>
            ))}
        </div>
    )
}

export default GalleryList;