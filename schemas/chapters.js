import Joi from 'joi';

//objeto de esquema Joi que define la forma de los datos de entrada que se espera para la creación de un capítulo:
const schema = Joi.object({

    manga_id: Joi
        .string()
        .required()
        .min(10),

    title: Joi
        .string()
        .required()
        .min(4)
        .max(50),

    cover_photo: Joi
        .string()
        .uri()
        // .required()
        .min(4),

    pages: Joi.array()
        .items(Joi.string().uri())
        .required()
        .messages({
            'string.empty': '"pages" is not allowed to be empty',
            'string.uri': '"pages" must be a valid uri'
}),

    order: Joi  
        .number() 
        .required()
        .min(1),
});

export default schema