import jwt from 'jsonwebtoken';

export const authAdmin = (req,res,next) => {
    try {
        const {adminToken} = req.headers;
        if(!adminToken) return res.status(401).json
        ({ success:false, message:"Access denied due to invalid token" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success:false, message:error.message });
    }
}