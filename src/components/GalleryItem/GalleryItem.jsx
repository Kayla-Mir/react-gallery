import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

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

function GalleryItem(props) {
    const [showDescription, setShowDescription] = useState(false);

    const changeText = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="catImage">
            {showDescription ?
                <div onClick={changeText} className="descriptionContainer">
                    <p className="description"><span>{props.image.description}</span></p>
                </div>
                :
                <div className="imageDiv">
                    <img onClick={changeText} src={props.image.path} />
                </div>
            }
            <ThemeProvider theme={theme}>
                <Stack style={{justifyContent: 'center'}} direction="row" spacing={1}>
                    <p className="likeFont">{props.image.likes} Likes</p>
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