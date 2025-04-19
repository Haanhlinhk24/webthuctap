const express = require("express");
var router = express.Router();
var productcontrollers = require("../controllers/ProductController");
var {upload} = require("../controllers/uploadController");
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/', upload.single("image"), productcontrollers.createProduct);
router.get("/",productcontrollers.getAll);

//router.get("/", productcontrollers.phanTrangSanPham);

router.put('/:id', productcontrollers.updateProduct);
router.delete("/:id",productcontrollers.deleteProduct);
router.get("/:id", productcontrollers.findProduct);

module.exports = router;
