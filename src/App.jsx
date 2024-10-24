import video from "./assets/1015(4).mp4";
import AppBarGeneric from './components/AppBarGeneric/AppBarGeneric.jsx';
import { PagesConfigProvider } from "./Contexts/PagesContexts.jsx";
import { PageOrganizer } from "./components/Organizer/PageOrganizer.jsx";



export function App() {

    return (
        <PagesConfigProvider>
            <video src={video} autoPlay muted loop className="video-fundo" />
            <AppBarGeneric />
            <PageOrganizer/>
        </PagesConfigProvider>
    )
}

