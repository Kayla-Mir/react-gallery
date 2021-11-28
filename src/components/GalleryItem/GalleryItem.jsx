import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
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
                    <p className="description">{props.image.description}</p>
                </div>
                :
                <div className="imageDiv">
                    <img onClick={changeText} src={props.image.path} />
                </div>
            }
            <p>{props.image.likes} Likes</p>
            <ThemeProvider theme={theme}>
                <Button onClick={() => props.likeCounter(props.image.id)}>Like 💕</Button>
                <Button onClick={() => props.deleteImage(props.image.id)}>Delete 🗑</Button>
                <Stack direction="row" spacing={1}>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete" disabled color="primary">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton color="secondary" aria-label="add an alarm">
                        <AlarmIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </Stack>
            </ThemeProvider>
        </div>
    )
}

export default GalleryItem;