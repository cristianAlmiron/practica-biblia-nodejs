const router = require("express").Router();
const { QuotesController } = require('../controllers')

router.get('/quotes', HomeController.index);
router.get('/quotes/all', HomeController.get);


module.exports = router;