const express = require('express');
const { homeCtrlFunction, cartCtrlFunction, skullteeCtrlFunction, shopCtrlFunction, ContactCtrlFunction,
    AboutCtrlFunction, ssteeCtrlFunction, socksCtrlFunction, hatCtrlFunction, sunriseteeCtrlFunction,
    dreamsteeCtrlFunction, flameteeCtrlFunction, packsocksCtrlFunction, worldteeCtrlFunction,
} = require('../controllers/pagesCtrlFile');

const router = express.Router();

router.get('/', homeCtrlFunction);
router.get('/index1', shopCtrlFunction);
router.get('/cart', cartCtrlFunction);
router.get('/Product-1', skullteeCtrlFunction);
router.get('/Contact', ContactCtrlFunction);
router.get('/About', AboutCtrlFunction);
router.get('/roger-roger-fragment-ss-tee', ssteeCtrlFunction);
router.get('/Product-2', socksCtrlFunction);
router.get('/roger-roger-mastermind-hat', hatCtrlFunction);
router.get('/Product-4', sunriseteeCtrlFunction);
router.get('/Product-3', dreamsteeCtrlFunction);
router.get('/Product-6.', flameteeCtrlFunction);
router.get('/roger-roger-basic-3pack-socks', packsocksCtrlFunction);
router.get('/Product-5', worldteeCtrlFunction);
module.exports = router;

