import {sayHello} from "@/lib/action"

 const ServerActionTestPage = () => {
    return(
        <div>
            <form action={sayHello}>
                <button>Test hello</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage
