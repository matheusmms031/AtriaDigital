import Home from "./pages/Home/Home.jsx"
import video from "./assets/1015(4).mp4";
import AppBarGeneric from './components/AppBarGeneric/AppBarGeneric.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import { useState } from "react";
import { pagesConfigContext } from "./Contexts/PagesContexts.jsx";
import { PageOrganizer } from "./components/Organizer/PageOrganizer.jsx";


const pages = {
    "pagination": [{ "path": "/", "element": <Home/>, "name": "Home" }, { "path": "/sobre", "element": <Sobre/>, "name": "teste" }],
    "select": "Home"
}


export function App() {
    const [pagesConfig, setPagesConfig] = useState(pages)

    return (
        <pagesConfigContext.Provider value={[pagesConfig,setPagesConfig]}>
            <video src={video} autoPlay muted loop className="video-fundo" />
            <AppBarGeneric />
            <PageOrganizer/>
        </pagesConfigContext.Provider>
    )
}

