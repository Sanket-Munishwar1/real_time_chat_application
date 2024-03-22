// import { connectToDB } from "@mongodb"
// import User from "@models/User"
// import { hash } from "bcryptjs"

// export  const POST = async (req, res) => {
//     try {
//         await connectToDB()
//         const body = await req.json()

//         const {username, email, password} = body

//         const existingUser = await User.findOne({ email })

//         if(existingUser){
//             return new Response('User is already present',{
//                 status:400,
//             })
//         }

//         const hashedPassword = await hash(password, 10)

//         const newUser = await User.create({
//             username,
//             email,
//             password: hashedPassword
//         })

//         await newUser.save()

//         return new Response(JSON.stringify(newUser), {status:200})

//     } catch (error) {
//         console.log(error)
//         return new Response('Fail to create a User',{
//             status: 500
//         })
//     }
// }


import mongoose from 'mongoose';
import { connectToDB } from "@mongodb";
// Assuming User.js exports a function that defines the model.
import defineUserModel from "@models/User";
import { hash } from "bcryptjs";

export const POST = async (req, res) => {
    try {
        await connectToDB();

        // Define User model only if it's not already defined
        const User = mongoose.models.User || defineUserModel();

        const body = await req.json();
        const { username, email, password } = body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return new Response('User is already present', { status: 400 });
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return new Response(JSON.stringify(newUser), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response('Failed to create a user', { status: 500 });
    }
};

