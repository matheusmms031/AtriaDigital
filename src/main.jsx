import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./pages/Home/Home.jsx"
import video from "./assets/1015(4).mp4";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppBarGeneric from './components/AppBarGeneric/AppBarGeneric.jsx';

const router = createBrowserRouter(
  [
    {path:'/',element:<Home/>},
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <video src={video} autoPlay muted loop className="video-fundo" />
    <AppBarGeneric />
    <RouterProvider router={router}/>
  </StrictMode>,
)
