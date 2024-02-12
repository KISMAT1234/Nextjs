
import Link from "next/link"
import NavLink from "./navLink/navLink" 
const Links = () => {

    const links = [
        {
            title:"Homepage",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Contact",
            path:"/contact",
        },
        {
            title:"Blog",
            path:"/blog",
        },
    ];

 
    const session = false
    const isAdmin = true

    return (
        <>
           <div>
                 {links.map((link =>(
                    <Link href={link.path} key={link.title} className="ml-10">{link.title}</Link>
                 )))}{
                    session ? (
                        <>
                        {
                            isAdmin &&  <NavLink item = {{title: "Admin", path:"/admin"}}/>
                        }
                        <button>Logout</button>
                        </>
                    ) : (
                        <NavLink item = {{title: "Login", path:"/login"}}/>
                    )
                 }
           </div>
        </>
    )
}
export default Links