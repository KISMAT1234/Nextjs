import Link from "next/link"
async function getUsers(){

    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}

export default async function Page(){
    const users = await getUsers();
    console.log(users);
    return(
        <>

         <h1>User List</h1>
         {
            users.map((data)=>(
           <Link href={`users/${data.id}`}>{data.name}</Link>
            ))
         }
        </>
    )
}