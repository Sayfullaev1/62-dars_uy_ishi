import React, { createContext, useState } from 'react'


export const GlobalContext = createContext()





export default function Context({children}) {

    const [ lang , setLang ] = useState("en-Us")

    const [ navigateItemForCard , setNavigateItemForCard ] = useState([])

  return (
    <GlobalContext.Provider value={ { langObject:{lang, setLang} , navigateItemForCardObject:{navigateItemForCard , setNavigateItemForCard} }  } >
        {children}
    </GlobalContext.Provider>
  )
}
