import joi from "joi-oid"

export const companyCreate = joi.object({
    user_id: joi.any().optional().messages({
        "string.empty": "The id is not being loaded from the database so it is not readable"
    }),
    name: joi.string().required().messages({
        "string.empty": "A name is required",
    }),
    website: joi.string().uri().required().messages({
        "string.empty": "A url of website is required",
    }),
    logo: joi.string().uri().required().messages({
        "string.empty": "A url of photo is required",
    }),
    description: joi.string().required().messages({
        "string.empty": "A description is required",
    })
})
