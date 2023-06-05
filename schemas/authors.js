import Joi from "joi"; //validador

let authorSchema = Joi.object(
    {
        name: Joi.string().required().min(2).max(30).message({
            "string.min": "the name must be at least 2 characteres",
            "string.max": "the name must not have more than 30 characters",
            "string.required": "the lastname is required"
        }),
        last_name:Joi.string().required().min(2).max(30).message({
            "string.min": "the lastname must be at least 2 characteres",
            "string.max": "the lastname must not have more than 30 characters",
            "string.required": "the lastname is required"
        }),
        city:Joi.string().required().min(2).max(30).message({
            "string.min": "the city must be at least 2 characteres",
            "string.max": "the city must not have more than 30 characters",
            "string.required": "the city is required"
        }),
        country:Joi.string().required().min(2).max(30).message({
            "string.min": "the country must be at least 2 characteres",
            "string.max": "the country must not have more than 30 characters",
            "string.required": "the country is required"
        }),
        date: Joi.date(), //si no aclaro que es requerido es false por defecto
        photo:Joi.string().required().min(1).uri().message({
            "string.min": "the image must be at least 1 characteres",
            
        }), 
        
        },
    
)
export default authorSchema