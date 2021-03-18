const router = require('express').Router();
const productController = require("../controllers/ProductController");

router.get('/', productController.getAll);
router.post('/', productController.create);
router.get('/:id', productController.findById);
router.delete('/:id', productController.delete);
router.put('/:id', productController.update);

module.exports = router;