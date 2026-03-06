
import Display from "./components/Display"
import { createBrowserRouter,Route,RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import { DisplayAlbum } from "./components/DisplayAlbum"
import Register from "./components/Register"

function  App() {
const routes=createBrowserRouter([




  {
  
path:"/",element:<Layout/>,children:[
{index:true, element:<Display/> },
{path:"/album/:id",element:<DisplayAlbum/> }

]
},
{
path:"registration",element:<Register/>
}


]

)



  return (
<RouterProvider router={routes}>
   
</RouterProvider>
  )
}

export default App
