"use client"
import Link from "next/link"
import { useRouter, usePathname, useSearchParams } from "next/navigation"


const NavigationTestPage = () =>{


    // CLIENT SIDE NAVIGATION
    const router =useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
     
    const kismat = searchParams.get("kismat")

    console.log(kismat);

    const handleClick = () =>{
        console.log("clicked")
        // router.push("/")
        // router.replace("/")
         router.refresh()

    }

    return (
        <>
         {/* <h1>NavigationTestPage </h1> */}
         <Link href="/">Click here</Link>
         <button onClick={handleClick}>Write and Redirect</button>
        </>
    )
    }
    export default NavigationTestPage