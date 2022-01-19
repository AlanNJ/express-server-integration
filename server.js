const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { urlencoded } = require("express");
require("dotenv").config();

const app = express();

mongoose
	.connect(process.env.URI)
	.then(() => console.log("Database connected"))
	.catch((err) => console.log(err));
app.use(express.json({ limit: "5mb" }));
app.use(urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use("/api", require("./routes/auth"));
app.use("/post", require("./routes/post"));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/.next"));
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server running on port 8000"));
