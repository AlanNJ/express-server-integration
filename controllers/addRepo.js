const Post = require("../models/post");
const addRepo = async (req, res) => {
	const { content } = req.body;
	const post = await new Post({ content });
	post.save();
	res.json({
		post,
	});
};
module.exports = addRepo;
