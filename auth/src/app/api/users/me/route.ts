import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server';
import {sendEmail} from '@/helpers/mailer'
import { getDataFromToken } from './getDataFromToken';


connect()

export async function POST(request: NextRequest){
    const userId= await getDataFromToken(request)
    const user = await User.findOne({_id : userId})

    return NextResponse.json({
        message:"User found",
        data: user
    })
}