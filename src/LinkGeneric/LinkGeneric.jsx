import { useContext } from "react"
import { pagesConfigContext } from "../Contexts/PagesContexts"



export default function LinkGeneric({children}){
    const pagesConfig = useContext(pagesConfigContext)

    return(
        <div onClick={() => {
            pagesConfig[0].select = "teste"
            console.log(pagesConfig)
            pagesConfig[1](pagesConfig[0])
        }}>
            {children}
        </div>
    )
}