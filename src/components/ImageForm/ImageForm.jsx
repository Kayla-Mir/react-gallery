import { useState } from 'react';
import swal from 'sweetalert';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
        primary: {
            main: '#676767',
        },
        secondary: {
            main: pink[200]
        }
    },
});


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
                title: "More info please!",
                text: "Please fill in all the fields!",
                icon: "error",
                buttons: true,
                dangerMode: true,
            });
        }
    }

    return (
        <div>
            <h3>Add a New Image!</h3>
            <form onSubmit={addNewImage}>
                <ThemeProvider theme={theme}>
                    <div>

                        <TextField
                            label="URL"
                            value={newImagePath}
                            onChange={(event) => setNewImagePath(event.target.value)}
                            size="small"
                            margin="normal"
                            color="secondary"
                        />
                        <TextField
                            label="Description"
                            multiline
                            maxRows={4}
                            value={newImageDescription}
                            onChange={(event) => setNewImageDescription(event.target.value)}
                            size="small"
                            margin="normal"
                            color="secondary"
                        />
                    </div>

                    <Button
                        color="primary"
                        variant="contained"
                        type="submit">
                        Add Image
                    </Button>
                </ThemeProvider>
            </form>

        </div>
    )
}

export default ImageForm;