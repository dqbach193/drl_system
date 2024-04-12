const express = require('express');
const router = express.Router();
const {
    getDRL,
    getDRLbySV,
    createDRL,
    deleteDRL,
    updateDRL
} = require('../controllers/drlController')
const requireAuth = require('../middleware/requireAuth')
//require auth for all drl routes
router.use(requireAuth)

router.get('/', getDRL)

//XEM Diem ren luyen 1 sinh vien
router.get('/:id', getDRLbySV)

//POST Diem ren luyen 1 sinh vien
router.post('/', createDRL);

//DELETE DRL 1 sinh vien
router.delete('/:id', deleteDRL)

//UPDATE DRL 1 sinh vien
router.patch('/:id', updateDRL)

module.exports = router;