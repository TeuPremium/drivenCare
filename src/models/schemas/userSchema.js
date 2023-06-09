import Joi from "joi";

const userSchema = joi.object({
    username : joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
})