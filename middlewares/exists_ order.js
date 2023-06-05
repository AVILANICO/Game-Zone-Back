// import Chapter from '../models/Chapter.js'

// async function chapterExistsOrder(req,res,next){

//     const orderFind = await Chapter.findOne({order: req.body.order})
//     if(orderFind){
//         return res.status(400).json({
//             success: false,
//             message: ["¡Chapters order already exists!"],
//         });
//     }
//     return next()
// }
// export default chapterExistsOrder
