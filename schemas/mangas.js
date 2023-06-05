import joi from "joi"

export const mangaCreate = joi.object({


    author_id:joi.optional(),

    company_id:joi.optional(),

    
    category_id:joi.required(),
    
    
    cover_photo:joi.string().uri(),
    title:joi.string()
    .required()
    .messages({ 
        "string.empty": "title is not allowed to be empty"
    }),

    description: joi.string()
    .required()
    .min(10)
    .messages({ 
        "string.min":"order length must be at least 10 characters long",
        "string.empty": "description is not allowed to be empty"

    }),

})
