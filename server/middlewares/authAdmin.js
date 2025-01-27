import jwt from 'jsonwebtoken';

export const authAdmin = (req,res,next) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success:false, message:error.message });
    }
}