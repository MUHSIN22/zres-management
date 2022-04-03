import React, { createContext, useState } from 'react'

export const EssentialContext = createContext();

export function EssentialProvider({children}) {
  const [essentialData,setEssentialData] = useState({
    dashboardFromDate: null,
    dashboardToDate: null
  })
  return (
    <EssentialContext.Provider value={[essentialData,setEssentialData]}>
        {children}
    </EssentialContext.Provider>
  )
}
