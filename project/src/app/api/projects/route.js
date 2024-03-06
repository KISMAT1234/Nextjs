import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(()=>{
        console.log(`db connect`)
    }).catch((err)=>{
        console.log(`error ${err}`)
    })
    return NextResponse.json({result:true})
}