async function getUser(id){

    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}


export default async function Page({params}){
    const users = await getUser(params.id);
    console.log(users);
    return(
        <>
         <h1>User Detail</h1>
         <h1>Age : {users.id}</h1>
         <h1>Email: {users.name}</h1>
         <h1></h1>
        </>
    )
}