import Link from 'next/link';
const NavLink = ({item}) =>{
    return (
        <>
         <h1>NavLink </h1>
         <Link href= "{item.path}">{item.title}</Link>
        </>
    )
    }
export default NavLink