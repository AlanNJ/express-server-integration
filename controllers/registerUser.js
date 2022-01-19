const bcrypt = require("bcrypt");
const User = require("../models/user");
const registerUser = async (req, res) => {
	console.log(req.body);
	const { name, phone, email, password } = req.body;
	//console.log(req.body);
	if (!name) {
		return res.status(400).send("Name is required");
	}
	if (!phone) {
		return res.status(400).send("Phone no. is required");
	}
	if (!email) {
		return res.status(400).send("Email is required");
	}
	if (!password) {
		return res
			.status(400)
			.send("Password can't be empty or should be at least 8 characters long");
	}
	const exist = await User.findOne({ email });
	//console.log(exist);
	if (exist) {
		res.status(400).send("The Email is already taken");
	}
	// const hashedPassword = await hashPassword(password);
	//console.log(hashedPassword);
	const user = await new User({
		name,
		phone,
		email,
		password,
	});

	const salt = await bcrypt.genSalt(10);
	// now we set user password to hashed password
	user.password = await bcrypt.hash(user.password, salt);
	// .then((doc) => res.status(201).send(doc));
	user.save();
	await res.json({
		message: "Registration successfull",
	});
};

module.exports = registerUser;
