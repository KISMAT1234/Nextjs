"use client"
import {useState} from 'react'
export default function Page(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const addUser = async() => {
        console.log({name, age, email})
        let response = await fetch("http://localhost:3000/api/users",{
            method:"Post",
            body:JSON.stringify({name, age, email}),
        });
       response = await  response.json();
       if(response.success){
        alert("New user added")
       }else{
        alert("some error")
       }
       console.log(response)
 
    }
    return(
        <>
             <h1>Addpage</h1>
             <input type="text" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/> <br></br>
             <input type="text" value={age} placeholder="Enter age" onChange={(e)=>setAge(e.target.value)}/><br></br>
             <input type="text" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
             <button onClick={addUser}>Add user</button>
        </>
    )
}