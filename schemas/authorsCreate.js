 import joi from "joi-oid"

export const authorCreate = joi.object({
    user_id: joi.any().optional().messages({
        "string.empty": "The id is not being loaded from the database so it is not readable"
    }),
    name: joi.string().required().messages({
        "string.empty": "A name is required",
    }),
    last_name: joi.string().allow(null).empty(''),
    city: joi.string().required().messages({
        "string.empty": "A city is required",
    }),
    country: joi.string().required().trim().messages({
        "string.empty": "A country is required",
    }),
    photo: joi.string().uri().required().messages({
        "string.empty": "A url is required",
    }),
})
