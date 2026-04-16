import { createBrowserRouter ,Navigate } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Homechild from "./Components/Home/Homechild"
import Createaccountchild from "./Components/Create_Account/Createaccountchild"
import Alreadyregisteredchild from "./Components/Already_Registered/Alreadyregisteredchild"
import Userchild from "./Components/User_Details/Userchild"

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Navigate to={"/home"}/>
            },
            Homechild(),
            Createaccountchild(),
            Alreadyregisteredchild(),
            Userchild()
        ]
    }

])

export default Router