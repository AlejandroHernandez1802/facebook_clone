const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const UsersSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, "The first name is required"],
			trim: true,
			text: true,
		},
		lastName: {
			type: String,
			required: [true, "The last name is required"],
			trim: true,
			text: true,
		},
		userName: {
			type: String,
			required: [true, "Username is required"],
			trim: true,
			text: true,
			unique: true,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			trim: true,
			text: true,
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
		},
		picture: {
			type: String,
			default: "",
		},
		cover: {
			type: String,
			default: "",
		},
		gender: {
			type: String,
			required: [true, "Gender is required"],
		},
		bYear: {
			type: Number,
			required: [true, "Birth year is required"],
			trim: true,
		},
		bMonth: {
			type: Number,
			required: [true, "Birth month is required"],
			trim: true,
		},
		bDay: {
			type: Number,
			required: [true, "Birth day is required"],
			trim: true,
		},
		verified: {
			type: Boolean,
			default: false,
		},
		friends: {
			type: Array,
			default: [],
		},
		following: {
			type: Array,
			default: [],
		},
		followers: {
			type: Array,
			default: [],
		},
		requests: {
			type: Array,
			default: [],
		},
		search: [
			{
				user: {
					type: ObjectId,
					ref: "UsersModel",
				},
			},
		],
		details: {
			bio: {
				type: String,
			},
			otherName: {
				type: String,
			},
			job: {
				type: String,
			},
			workplace: {
				type: String,
			},
			highSchool: {
				type: String,
			},
			college: {
				type: String,
			},
			currentCity: {
				type: String,
			},
			homeTown: {
				type: String,
			},
			relationship: {
				type: String,
				enum: ["Single", "In a relationship", "Married", "Divorced"],
			},
			instagram: {
				type: String,
			},
		},
		savedPosts: [
			{
				post: {
					type: ObjectId,
					ref: "PostModel",
				},
				savedAt: {
					type: Date,
					default: new Date(),
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("users", UsersSchema);
