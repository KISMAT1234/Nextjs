import Link from "next/link"
const NotFound = () =>{
    return (
        <>
         <h1>NotFound </h1>
         <p> Sorry the page you are looking for does not exists</p>
         <Link href="/">Return Home</Link>
        </>
    )
    }
    export default NotFound