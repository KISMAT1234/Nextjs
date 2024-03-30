import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server';
import {sendEmail} from '@/helpers/mailer'


connect()

export async function POST(request: NextRequest){
    try{
        const reqBody =await request.json()
        const {username, email, password} = reqBody
        console.log(reqBody)
        // const user = await User.find({})

        // if(user){
        //     return NextResponse.json({error: "User already exist"}, {status: 400})
        // }

        const newUser = new User({
            username,
            email,
            password
        })
        const savedUser = await newUser.save()
        console.log(savedUser);

        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User registered successfully",
            success: true,
            savedUser
        })


    }
    catch(err){

    }
}
