const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('explore', {
      url: "https://ids.lib.harvard.edu/ids/iiif/18483392/full/full/0/default.jpg"
    });
});

router.get('/:image_id', (req, res) => {
    res.render('explore');
});


module.exports = router;