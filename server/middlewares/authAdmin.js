import jwt from 'jsonwebtoken';

export const authAdmin = (req,res,next) => {
    try {
        const { admintoken } = req.headers;
        console.log(admintoken);
        
        
        if(!admintoken) return res.status(401).json
        ({ success:false, message:"Access denied due to invalid token" });

        const decoded = jwt.verify(admintoken, process.env.JWT_SECRET);
        if(decoded.email !== process.env.ADMIN_EMAIL) return res.status(401).json
        ({ success:false, message:"Access denied" });
        
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ success:false, message:error.message });
    }
}