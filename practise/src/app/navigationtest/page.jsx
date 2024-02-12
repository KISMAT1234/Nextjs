"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"


const NavigationTestPage = () =>{
    const router =useRouter()

    const handleClick = () =>{
        console.log("clicked")
        router.push("/")

    }

    return (
        <>
         {/* <h1>NavigationTestPage </h1> */}
         <Link href="/">Click here</Link>
         <buttton onClick={handleClick}>Write and Redirect</buttton>
        </>
    )
    }
    export default NavigationTestPage