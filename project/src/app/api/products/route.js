import { NextResponse } from "next/server";
import mongoose from 'mongoose'
import users from "@/lib/model/product";

export async function GET(){
   await mongoose.connect('mongodb://localhost:27017/e-commerce').then(()=>{
        console.log(`db connect`)
    }).catch((err)=>{
        console.log(`error ${err}`)
    })

    const data = await users.find();
    console.log(data)
    return NextResponse.json({result:data})
}