
import Display from "./components/Display"
import { createBrowserRouter,Route,RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"

function  App() {
const routes=createBrowserRouter([
{
path:"/",element:<Layout/>,children:[
{index:true, element:<Display/> }

]

}

])



  return (
<RouterProvider router={routes}>
   
</RouterProvider>
  )
}

export default App
