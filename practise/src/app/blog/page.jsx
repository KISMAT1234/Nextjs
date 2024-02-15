const getData = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!res.ok){
        throw new Error("Something went wrong")
    }

    return res.json()
}

const blogPage = () =>{

    const posts = await getData();
    return (
        <>
         <h1>blogPage </h1>
         <div>
              {posts.map((data)=>{
               <div>
                { data.post.id}
               </div>
              })}

         </div>
        </>
    )
    }
    export default blogPage
