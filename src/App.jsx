import { useState, useEffect } from "react";
import AppBarGeneric from './components/AppBarGeneric/AppBarGeneric.jsx';
import { PagesConfigProvider } from "./Contexts/PagesContexts.jsx";
import { PageOrganizer } from "./components/Organizer/PageOrganizer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useContext } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";
import Front from "./components/Front/Front.jsx";
import fundo from "./assets/fundo.png";
import video from "./assets/videofundoteste.mp4";

export function App() {

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento de dados
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajuste o tempo para simular o tempo de carregamento
  }, []);

    return (
        <>
        <LoadingScreen isLoading={isLoading} />
        <video src={video} autoPlay muted loop className="video-fundo" />
        {!isLoading && 
        <PagesConfigProvider>
            <Front/>
            <PageOrganizer/>
        </PagesConfigProvider>}
        </>
    )
}

