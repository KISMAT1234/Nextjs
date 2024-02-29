import { NextResponse } from "next/server";
import {user} from "../../../util/db"

export function GET(request){
    const data = user;
    return NextResponse.json(data)
}

export async function POST(request, response){
    let payload = await request.json()
    console.log(payload)
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"required field",succes:false})
    }
    return NextResponse.json({result:"User created succesfullyy",success:true})
}