import User from "../models/User.js";

async function is_admin(req, res, next) {
    console.log(req.user)
    if (!req.user || req.user.role !== 3) {
        return res.status(400).json({
            success: false,
            message: 'Role is not admin'
        });
    } else {
        return next();
    }
}

export default is_admin;

