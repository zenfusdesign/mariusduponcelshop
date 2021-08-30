const express = require('express');
const { homeCtrlFunction, cartCtrlFunction, skullteeCtrlFunction, shopCtrlFunction, ContactCtrlFunction,
    AboutCtrlFunction, ssteeCtrlFunction, socksCtrlFunction, hatCtrlFunction, sunriseteeCtrlFunction,
    dreamsteeCtrlFunction, flameteeCtrlFunction, packsocksCtrlFunction, worldteeCtrlFunction,
} = require('../controllers/pagesCtrlFile');

const router = express.Router();

router.get('/', homeCtrlFunction);
router.get('/index1', shopCtrlFunction);
router.get('/cart', cartCtrlFunction);
router.get('/roger-roger-mastermind-skull-tee', skullteeCtrlFunction);
router.get('/Contact', ContactCtrlFunction);
router.get('/About', AboutCtrlFunction);
router.get('/roger-roger-fragment-ss-tee', ssteeCtrlFunction);
router.get('/roger-roger-mastermind-socks', socksCtrlFunction);
router.get('/roger-roger-mastermind-hat', hatCtrlFunction);
router.get('/roger-roger-fragment-pink-sunrise-tee', sunriseteeCtrlFunction);
router.get('/roger-roger-fragment-manifest-your-dreams-tee', dreamsteeCtrlFunction);
router.get('/roger-roger-flame-tee', flameteeCtrlFunction);
router.get('/roger-roger-basic-3pack-socks', packsocksCtrlFunction);
router.get('/roger-roger-fragment-create-your-world-tee', worldteeCtrlFunction);
module.exports = router;

