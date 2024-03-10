import {addPost} from "@/lib/action"

 const ServerActionTestPage = () => {
    // const actionInComponent = async() =>{
    //     "use server"
    //     console.log("it works")
    // }
    return(
        <div>
            <form action={addPost}>
                <input type="text" name="title" placeholder="title"/>
                <input type="text" name="desc" placeholder="desc"/>
                <input type="text" name="slug" placeholder="slug"/>
                <input type="text" name="userid" placeholder="userId"/>
                <button>Create</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage
