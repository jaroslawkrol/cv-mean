var express = require('express');
var router = express.Router();

router.get(['/', '/dashboard', '/experience', '/education', '/skills', '/personal'], function (req, res, next) {
    res.render('index.html');
});

module.exports = router;