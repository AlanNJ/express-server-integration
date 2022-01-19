const { json } = require("express");
const Post = require("../models/post");
const getPost = async (req, res) => {
	try {
		// console.log(req.user);
		const post = await Post.find().sort({ createdAt: -1 }).limit(10);
		res.json(post);
		console.log(post);
	} catch (err) {
		res.json("no post");
	}
};
module.exports = getPost;
