var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/id', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/edit/:id', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;