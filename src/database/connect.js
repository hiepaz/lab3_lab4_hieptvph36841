import mongoose from "mongoose";

export const connectDB = async (ur) => {
	try {
		await mongoose.connect(uri);
		console.log("Connected to database " + uri);
	} catch (err) {
		console.log(err.message);
	}
};