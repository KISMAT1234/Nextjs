import Links from "./links/Links"
const Navbar = () =>{
    return (
        <>
           <div className="flex justify-around">
               <div>Logo</div>
               <div>
                     <Links/>
               </div>
           </div>
        </>
    )
    }
 export default Navbar;