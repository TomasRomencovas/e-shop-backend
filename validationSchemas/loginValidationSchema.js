import Joi from "joi";
import { passwordRegex } from "../utils/regex.js";

const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(passwordRegex)
    .required()
    .messages({
      "string.pattern.base": "Invalid password format",
    }),
}).exist();

export default loginValidationSchema;
