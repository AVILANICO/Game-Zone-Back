import joi from "joi"

export const userCreateSignUp = joi.object({
    name: joi.string(),
    email: joi.string().email({minDomainSegments: 2})
    .required(),
    password: joi.string()
    .min(8)
    .max(30)
    .required(),
    photo: joi.string().uri()
})

export const userCreateSignIn = joi.object({
    email: joi.string().email({minDomainSegments: 2})
    .required(),
    password: joi.string()
    .min(8)
    .max(30)
    .required(),
    photo: joi.string().uri()
})
