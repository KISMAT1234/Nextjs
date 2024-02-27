import { NextResponse } from "next/server";
import {user} from "../../../util/db"

export function GET(request){
    const data = user;
    return NextResponse.json(data)
}