import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router'
import { RouterProvider } from 'react-router-dom'
import Globalprovider from "./Globalcontext/globalcontext.jsx"


createRoot(document.getElementById('root')).render(
  
    <Globalprovider>
        <RouterProvider router= {Router} />
    </Globalprovider>
        
     
    
)
