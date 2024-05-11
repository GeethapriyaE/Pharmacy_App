const express=require("express");
const router=express.Router();
const productController=require("../controllers/product.controller.js");


router.post('/', productController.createProduct);
router.post('/creates', productController.createMultipleProduct);
router.delete('/:id', productController.deleteProduct);
router.put('/:id', productController.updateProduct);
router.get('/',productController.getAllProducts)
router.get('/id/:id', productController.findProductById);
module.exports=router;