import Joi from "joi";
import {
  passwordRegex,
  phoneRegex,
  postCodeValidation,
} from "../utils/regex.js";

const userValidationSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(passwordRegex)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
  phone: Joi.string().pattern(phoneRegex).required().messages({
    "string.pattern.base": "Phone number must be a valid Lithuanian format.",
  }),
  address: Joi.string().min(5).max(100).required(),
  postCode: Joi.string().pattern(postCodeValidation).required().messages({
    "string.pattern.base": "Post code must be a valid lithuanian postal code.",
  }),
});

export default userValidationSchema;
