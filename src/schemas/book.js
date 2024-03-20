import Joi from "joi";

const bookSchema = Joi.object({
	name: Joi.string().required().messages({
		"any.required": "Tên ko để trống",
		"string.empty": "Tên ko đúng định dạng",
	}),
	price: Joi.number().required().min(50).max(500).messages({
		"any.required": "Giá ko để trống",
		"number.empty": "Giá ko đúng định dạng",
		"number.min": " Giá nhỏ nhất {#limit}",
		"number.max": "Giá lớn nhất {#limit}",
	}),
	description: Joi.string().required().messages({
		"any.required": "Mô tả ko để trống",
		"string.empty": "Mô tả ko đúng định dạng",
	}),
	image: Joi.string().required().messages({
		"any.required": "Ảnh ko để trống",
		"string.empty": "Ảnh ko đúng định dạng",
	}),
	author: Joi.string().required().messages({
		"any.required": "author ko để trống",
		"string.empty": "author ko đúng định dạng",
	}),
});

export { bookSchema };