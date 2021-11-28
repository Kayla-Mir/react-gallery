import { useState } from 'react';
import swal from 'sweetalert';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Button from '@mui/material/Button';

// sets a theme we can use for MUI
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

// Function that handles the inputs from a user and sends them to where they need to be
function ImageForm({ addImage }) {
    // sets two pieces of state that take the input from users
    const [newImagePath, setNewImagePath] = useState('');
    const [newImageDescription, setNewImageDescription] = useState('');

    // takes 
    const addNewImage = (event) => {
        event.preventDefault(); // prevents form submission from reloading the browser
        const randomId = Math.random() * (18000 - 18) + 18; // assigns a random id between 18000 and 18

        const newImage = {
            id: randomId, // the random id
            path: newImagePath, // the path from the user input being stored in our piece of state
            description: newImageDescription, // the description from the user input being stored in our piece of state
            likes: 0 //starting out with 0 likes :(
        };
        if (newImagePath && newImageDescription) { // if both of the inputs are filled in
            addImage(newImage); // calls our addImage function from App.jsx with the newImage being sent with it
            setNewImagePath(''); // sets the inputs to empty
            setNewImageDescription('');
        } else {
            swal({ // fancy error message if the inputs are empty
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