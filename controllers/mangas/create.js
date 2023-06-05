import createHttpError from "http-errors";
import Manga from "../../models/Manga.js";

let create = async(req, res, next) => {
  
  console.log(req.file);
  const {firebaseUrl} = req.file ? req.file : '';
  req.body.cover_photo = firebaseUrl;
  
  try {
    let one = await new Manga(req.body)
    await one.save()
    return res.status(201).json({
        success: 'ok',
        id: one._id,
        timestamps: one.createdAt
    })
  } catch (error) {
    console.log(error)
    return next(createHttpError(500, error))
  }
}

export default create;
