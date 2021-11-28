import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

// sets a theme to be used by MaterialUI on this file
const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
    secondary: {
        main: pink[100]
    }
  },
});

// Conditionally renders the image or description of an image and all of the buttons attached to each image
function GalleryItem(props) {
    //set a piece of state to conditionally render the description based on clicking on an element
    const [showDescription, setShowDescription] = useState(false);

    // this function handles the switching of the piece of states value
    const changeText = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="catImage">
            {showDescription ?
                // if showDescription is true it will render the description of the image, the span is for css styling purposes
                    // if its false it will render the image, both of them have on click handlers to call the changeText function
                <div onClick={changeText} className="descriptionContainer">
                    <p className="description"><span>{props.image.description}</span></p>
                </div>
                :
                <div className="imageDiv">
                    <img onClick={changeText} src={props.image.path} />
                </div>
            }
            {/* ThemeProvider allows us to use the set theme at the top of the page by using a color tag,
                    Stack lets us specify we want them in a row with spacing,
                    and you can also use inline styling with MUI */}
            <ThemeProvider theme={theme}>
                <Stack style={{justifyContent: 'center'}} direction="row" spacing={1}>
                    <p className="likeFont">{props.image.likes} Likes</p>
                    {/* I imported icons to use for the like and delete buttons,
                    on click they will send the ID of that image back to App.jsx and 
                    run the functions specified in their onClick  */}
                    <IconButton color="secondary" onClick={() => props.likeCounter(props.image.id)}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton color="primary" onClick={() => props.deleteImage(props.image.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            </ThemeProvider>
        </div>
    )
}

export default GalleryItem;