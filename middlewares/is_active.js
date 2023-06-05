import Author from "../models/Author.js";
import Company from "../models/Company.js"

async function is_active(req, res, next){
  try {
      const author = await Author.findOne({ user_id: req.user._id});
      if (author.active === true) {
        return next();
      }
      
      const company = await Company.findOne({ user_id: req.user._id});
      if (company.active === true) {
        return next();
      }
      return res.status(404).json({
        success: false,
        message: ['Author or company not found']
      })  
    } 
    
    catch (error) {
      return res.status(500).json({
        success: false,
        message: [{error: error.message}]
      })
    }
}

export default is_active;
