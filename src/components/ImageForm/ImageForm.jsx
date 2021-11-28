import { useState } from 'react';
import swal from 'sweetalert';

function ImageForm({ addImage }) {
    const [newImagePath, setNewImagePath] = useState('');
    const [newImageDescription, setNewImageDescription] = useState('');

    const addNewImage = (event) => {
        event.preventDefault();
        const randomId = Math.random() * (18000 - 18) + 18;

        const newImage = {
            id: randomId,
            path: newImagePath,
            description: newImageDescription,
            likes: 0
        };
        if (newImagePath && newImageDescription) {
            addImage(newImage);
            setNewImagePath('');
            setNewImageDescription('');
        } else {
            swal({
                title: "Error!",
                text: "Cannot add image at this time!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              });
        }
    }

    return (
        <div>
            <h3>Add a New Image!</h3>
            <form onSubmit={addNewImage}>
                <div>
                    <input 
                        type="text"
                        placeholder="URL"
                        value={newImagePath}
                        onChange={(event) => setNewImagePath(event.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Description"
                        value={newImageDescription}
                        onChange={(event) => setNewImageDescription(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Add Image</button>
                </div>
            </form>
            
        </div>
    )
}

export default ImageForm;