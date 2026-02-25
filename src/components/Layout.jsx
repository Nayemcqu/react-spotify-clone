import Player  from "./Player"
import Sidebar from "./sidebar"
import { Outlet } from "react-router-dom"
export default  function Layout(){

return(

 <div className="h-screen bg-black ">

  <div className="h-[90%] flex">
  <Sidebar/>
  <Outlet/>
</div>
<Player/>

    </div>


)


} 