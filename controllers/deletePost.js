const Post = require("../models/post");
const deletePost = async (req, res) => {
	console.log(req.params.id);
	const post = await Post.findByIdAndDelete(req.params.id);
	const post2 = await Post.find().sort({ createdAt: -1 }).limit(10);
	res.json({ post2 });
};
module.exports = deletePost;
