import React, { ReactComponentElement, ReactPropTypes, useState } from 'react'

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number, name: string }[] }
}
interface Props {
  children: React.ReactNode
}

const defaultContextValue: AppStateValue = {
  username: '阿莱克斯',
  shoppingCart: { items: [] }
}

export const appContext = React.createContext(defaultContextValue)
export const appStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)

export const AppStateProvider: React.FC<Props> = (props) => {
  const [state, setState] = useState(defaultContextValue)
  return (
    <appContext.Provider value={state}>
      <appStateContext.Provider value={setState}>
        {props.children}
      </appStateContext.Provider>
    </appContext.Provider>
  )
}