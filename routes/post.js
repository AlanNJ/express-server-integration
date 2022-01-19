const express = require("express");
const addRepo = require("../controllers/addRepo");
const getPost = require("../controllers/getPost");
const deletePost = require("../controllers/deletePost");
const updatePost = require("../controllers/updatePost");
const getSinglePost = require("../controllers/getSinglePost");

const router = express.Router();
router.post("/repo", addRepo);
router.get("/get-post", getPost);
router.delete("/delete-post/:id", deletePost);
router.put("/update-post/:id", updatePost);
router.get("/get-single-post/:id", getSinglePost);
module.exports = router;
