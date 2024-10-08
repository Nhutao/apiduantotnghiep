const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const cateController = require("../controllers/cateController");

//show tất cả sản phẩm
//http://localhost:5000/product/allsp
router.get("/allsp", productController.getAllProducts);

//show danh mục theo gới tính
//http://localhost:5000/product/allsp/gioitinh"
router.get("/allsp/gioitinh", productController.getCatesByGender);

//http://localhost:5000/product/allsp/doi"
router.get("/allsp/doi", productController.getCatesByCouple);

//show sản phẩm theo danh mục
//http://localhost:5000/product/cate/:id
router.get("/cate/:id", productController.getProductsByCate);

//show sản phẩm mới trong danh mục
//http://localhost:5000/product/productnew/
router.get("/productnew/", productController.getNewProductsByCategory);
//chi tiết sản phẩm theo id
//http://localhost:5000/product/detailsp
router.get("/detailsp/:id", productController.getProductById);

//thêm sản phẩm
//http://localhost:5000/product/addsp
router.post("/addsp", productController.addProduct);

//xóa sản phẩm
//http://localhost:5000/product/deletesp
router.delete("/deletesp/:id", productController.deleteProduct);

//sửa sản phẩm
//http://localhost:5000/product/updatesp
router.put("/updatesp/:id", productController.updateProduct);

//phân trang sản phẩm
//http://localhost:5000/product/page?page=1&limit=1
router.get("/page", productController.getProductsByPage);

//api tìm kiếm sản phẩm bằng cách nhập tên sản phẩm và tên danh mục
//http://localhost:5000/product/search
router.post("/search", productController.searchProducts);

module.exports = router;
