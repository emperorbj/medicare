import validator from 'validator';
import bcrypt from 'bcrypt';
import cloudinary from 'cloudinary';
import doctorModel from '../model/doctorModel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// API FOR ADDING DOCTOR
export const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address} = req.body;
        const imageFile = req.file;

        // checking for empty fields
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({ success:false ,message: "Please fill all the fields" });
        }
        
        // validating email
        if(!validator.isEmail(email)){
            return res.status(400).json({ success:false ,message: "Invalid email" });
        }


        // validating password
        if(password.length < 6){
            return res.status(400).json({ success:false ,message: "Password must be atleast 6 characters" });
        }


        // checking if doctor already exists
        const doctorExists = await doctorModel.findOne({ email });
        if(doctorExists){
            return res.status(400).json({ success:false ,message: "Doctor already exists" });
        }

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);



        // uploading image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type: 'image'});
        console.log(imageUpload);
        const imageURL = imageUpload.secure_url;

        // saving doctor to database
        const doctor = new doctorModel({
            name,
            email,
            image:imageURL,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date: Date.now()
        });

        await doctor.save();
        res.status(200).json({ success:true ,message: "Doctor added successfully", doctor});

    } catch (error) {
        console.log(error);
        res.status(500).json({ success:false, message:error.message });
        
    }
}



// API FOR ADMIN LOGIN

export const adminLogin = async (req,res) => {
    try {
        const { email, password } = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({email}, process.env.JWT_SECRET);
            res.status(200).json({ success:true ,message: "Admin logged in successfully", token});
        }
        else{
            return res.status(400).json({ success:false ,message: "Invalid email or password" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success:false, message:error.message });
    }
}



