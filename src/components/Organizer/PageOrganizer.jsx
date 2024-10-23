import { pagesConfigContext } from "../../Contexts/PagesContexts"
import { useContext } from "react"

export function PageOrganizer(){
    const pagesConfig = useContext(pagesConfigContext)
    return ( 
        
            pagesConfig[0]['pagination'].map((array) => {
                if(array.name == pagesConfig[0]['select']){
                    console.log(array.name)
                    return(
                        <>
                            {array.element}
                        </>
                    )
                }
            })

    )
}