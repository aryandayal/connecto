import { useEffect } from "react"

export const useDocumentTitle = (titleText) => {
    useEffect(() => {
      document.title = `${titleText} | connecto`
    }, [titleText]) 
}