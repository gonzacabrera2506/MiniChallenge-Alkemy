const express = require('express');
const router = express.Router();
const controllerOperation = require('../controllers/operation');

router.get('/', controllerOperation.list);
router.post('/add', controllerOperation.save);
router.get('/entryList', controllerOperation.entryList);
router.get('/exitList', controllerOperation.exitList);


module.exports = router;