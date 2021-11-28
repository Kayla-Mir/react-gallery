const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    for (const galleryItem of galleryItems) {
        if (galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

// POST route pushes the new image to the galleryItems array
router.post('/', (req, res) => {
    const image = req.body;
    galleryItems.push(image);
    res.sendStatus(200);
})

// DELETE route splices based on the index, which is found with the id
router.delete('/:id', (req, res) => {
    const idToDelete = galleryItems.findIndex(image => image.id === Number(req.params.id));
    galleryItems.splice(idToDelete, 1);
    res.sendStatus(200);
});

module.exports = router;