const Post = require("../models/post");
const updatePost = async (req, res) => {
	const { updatedPost } = req.body;
	console.log(req.body);
	console.log(req.params.id);
	const post = await Post.findByIdAndUpdate(
		req.params.id,
		{ content: updatedPost },
		{
			new: true,
		}
	);
	res.json(post);
};
module.exports = updatePost;
