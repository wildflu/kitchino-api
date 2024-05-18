

const express = require('express');
const router = express.Router();

const items = [];


router.get('/',(rea, res)=> {
    res.json(items);
});


module.exports = router