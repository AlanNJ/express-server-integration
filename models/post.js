const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const postSchema = new Schema(
	{
		content: {
			type: String,
			required: true,
		},
		postedBy: {
			type: ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model("Post", postSchema);
