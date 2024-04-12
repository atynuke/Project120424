import { RouterProvider } from 'react-router-dom'
import router from "./router"


function App() {

  return(
    <>
    <userContext>
      
    </userContext>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

