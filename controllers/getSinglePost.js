const Post = require("../models/post");
const getSinglePost = async (req, res) => {
	const post = await Post.findById(req.params.id);
	res.json({ post });
	console.log(post);
};
module.exports = getSinglePost;
