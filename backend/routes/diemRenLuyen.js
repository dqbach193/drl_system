const express = require('express');
const router = express.Router();
const {
    createDRL,
    getDRL,
    getDRLbySV
} = require('../controllers/drlController')


router.get('/', getDRL)

//XEM Diem ren luyen 1 sinh vien
router.get('/:id', getDRLbySV)

//POST Diem ren luyen 1 sinh vien
router.post('/', createDRL);

//DELETE DRL 1 sinh vien
router.delete('/:id',(req, res) =>{
    res.json({msg: 'DELETE Diem ren luyen 1 sinh vien'});
})

//UPDATE DRL 1 sinh vien
router.patch('/:id',(req, res) =>{
    res.json({msg: 'UPDATE Diem ren luyen 1 sinh vien'});
})

module.exports = router;