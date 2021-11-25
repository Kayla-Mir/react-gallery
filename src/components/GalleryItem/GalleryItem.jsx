function GalleryItem({image}) {
    return (
        <div className="catImage">
            <img src={image.path}/>
            <p className="description">{image.description}</p>
            <button>Like 💕</button>
            <button>Delete 🗑</button>
        </div>
    )
}

export default GalleryItem;