const express = require('express');
const { homeCtrlFunction, cartCtrlFunction, skullteeCtrlFunction, shopCtrlFunction, ContactCtrlFunction,
    AboutCtrlFunction, ssteeCtrlFunction, socksCtrlFunction, hatCtrlFunction, sunriseteeCtrlFunction,
    dreamsteeCtrlFunction, flameteeCtrlFunction, packsocksCtrlFunction, worldteeCtrlFunction, Product7Function, Product8Function, Product9Function, Product10Function,
    Product11Function, Product12Function, Product13Function,
} = require('../controllers/pagesCtrlFile');

const router = express.Router();

router.get('/', homeCtrlFunction);
router.get('/index1', shopCtrlFunction);
router.get('/cart', cartCtrlFunction);
router.get('/Contact', ContactCtrlFunction);
router.get('/About', AboutCtrlFunction);
router.get('/Product-1', skullteeCtrlFunction);
router.get('/Product-2', socksCtrlFunction);
router.get('/Product-3', dreamsteeCtrlFunction);
router.get('/Product-4', sunriseteeCtrlFunction);
router.get('/Product-5', worldteeCtrlFunction);
router.get('/Product-6', flameteeCtrlFunction);
router.get('/Product-7', Product7Function);
router.get('/Product-8', Product8Function);
router.get('/Product-9', Product9Function);
router.get('/Product-10', Product10Function);
router.get('/Product-11', Product11Function);
router.get('/Product-12', Product12Function);
router.get('/Product-13', Product13Function);
//router.get('/roger-roger-fragment-ss-tee', ssteeCtrlFunction);
//router.get('/roger-roger-mastermind-hat', hatCtrlFunction);
//router.get('/roger-roger-basic-3pack-socks', packsocksCtrlFunction);
module.exports = router;

