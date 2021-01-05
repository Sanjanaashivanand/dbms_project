var express = require('express');
const mysqlConnection = require('../sqlconnection');
var router = express.Router();
const {createCategory,getCategoryById,getAllCategories,getACategory,UpdateCategory,DeleteCategory} = require("../controllers/category")
const{isSignedIn,isAuthenticated,isAdmin} = require("../controllers/authentication");
const {getUserById} = require("../controllers/User")


//PARAMS
router.param("userId",getUserById);
router.param("categoryId",getCategoryById);

//CREATE
//Note using the custom middleware cause only admin is allowed to create,update and delete
router.post("/create/:userId",isSignedIn,isAuthenticated,isAdmin,createCategory)

//READ
//get all categories
router.get("/",getAllCategories);
//get category by id
router.get("/:categoryId",getACategory);

//UPDATE
router.put("/:categoryId",UpdateCategory);

//DELETE
router.delete("/:categoryId",DeleteCategory);

module.exports = router 