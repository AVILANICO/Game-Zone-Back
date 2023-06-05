// import Chapter from "../models/Chapter.js";

// let controller = {

//     create: async(req,res,next) => {
//         try {
//             let capitulo = await Chapter.create(req.body)
//             return res
//                 .status(201)
//                 .json({
//                     message: 'create successfully',
//                     capitulo
//                 })
//         } catch (error) {
//             next (error)
//         }
//     },

//     read: async(req, res, next) => {
//         try {
//             let capitulos = await Chapter.find({manga_id:req.params.id})
//             if(capitulos){
//                 return res
//                     .status(200)
//                     .json({
//                         message: "these are the chapters",
//                         capitulos
//                     })
//             }
//         } catch (error) {
//             next(error)
//         }
//     },
// } 
// export default controller

