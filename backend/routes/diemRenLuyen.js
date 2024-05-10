const express = require('express');
const router = express.Router();
const {
    getDRL,
    getDRLbySV,
    createDRL,
    deleteDRL,
    updateDRL,
    getDRLbyClass,
    getDRLbyYear,
    getDRLAll
} = require('../controllers/drlController')

router.get('/year', getDRLbyYear)
router.get('/all', getDRLAll)

const requireAuth = require('../middleware/requireAuth')
//require auth for all drl routes
router.use(requireAuth)

router.get('/', getDRL)

//XEM DRL 1 lop
router.get('/class', getDRLbyClass)

//XEM DRL 1 khoa


//XEM Diem ren luyen 1 sinh vien
router.get('/:id', getDRLbySV)

//POST Diem ren luyen 1 sinh vien
router.post('/', createDRL);

//DELETE DRL 1 sinh vien
router.delete('/:id', deleteDRL)

//UPDATE DRL 1 sinh vien
router.patch('/:id', updateDRL)

module.exports = router;