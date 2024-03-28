const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    res.json({msg: 'He thong diem ren luyen'});
})

//XEM Diem ren luyen 1 sinh vien
router.get('/:id',(req, res) =>{
    res.json({msg: 'XEM Diem ren luyen 1 sinh vien'});
})

//POST Diem ren luyen 1 sinh vien
router.post('/', (req, res) =>{
    res.json({msg: 'POST Diem ren luyen 1 sinh vien'});
})

//DELETE DRL 1 sinh vien
router.delete('/:id',(req, res) =>{
    res.json({msg: 'DELETE Diem ren luyen 1 sinh vien'});
})

//UPDATE DRL 1 sinh vien
router.patch('/:id',(req, res) =>{
    res.json({msg: 'UPDATE Diem ren luyen 1 sinh vien'});
})

module.exports = router;