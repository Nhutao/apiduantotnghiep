const express = require("express");
const router = express.Router();
const cateController = require("../controllers/cateController");

//show tất cả danh mục
//http://localhost:5000/cate/allcate
router.get("/allcate", cateController.getAllCates);



//thêm danh mục
//http://localhost:5000/cate/addcate
router.post("/addcate", cateController.addCate);

//xóa danh mục
//http://localhost:5000/cate/deletecate
router.delete("/deletecate/:id", cateController.deleteCate);

//sửa danh mục
//http://localhost:5000/cate/updatecate
router.put("/updatecate/:id", cateController.updateCate);

//
module.exports = router;
