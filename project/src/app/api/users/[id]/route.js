import { NextResponse } from "next/server";
import {user} from "../../../../util/db"

export function GET(request,content){
    console.log(content,params.id)
    const data = user;
     
    const userData= user.filter((item)=>{
        item.id == content.params.id
    })

    return NextResponse.json(
        userData.length==0?{result:"no data found",success:false}:{result:userData,success:true},{status:200})
}

export async function PUT(request, content){
    let payload =await request.json()
     
    payload.id = content.params.id;
    if(!payload.name || !payload.age || !payload.email)     
    {
        return NextResponse.json({result:"not valid"});
    }

    return NextResponse.json({result:payload,success:true},{status:200});

}
