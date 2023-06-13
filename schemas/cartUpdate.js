import Joi from 'joi'

const schema = Joi.object({

    cantidad: Joi
    .number()
    .required()
    .positive()
    .message({
        'any.required': 'Quantity is required',
        'number.empty': 'Quantity is required',
        'number.min': 'Quantity must be more than 0',
        'number.positive': 'Quantity must be a positive number',
    }),
})

export default schema