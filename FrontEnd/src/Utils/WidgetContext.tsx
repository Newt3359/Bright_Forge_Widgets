import type {Widget} from "./Widget.ts";
import * as React from "react";
import {createContext, useContext, useState} from "react";


type WidgetContextType = {
    widget : Widget
    setWidget: React.Dispatch<React.SetStateAction<Widget>>
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined)

export function WidgetManager({children}: {children: React.ReactNode}){
    const [widget, setWidget] = useState<Widget>({
        id: 0,
        title: "",
        description: "",
        icon: "",
        price: 0,
        quantity: 0,
        colors: [],
    })

    return(
    <WidgetContext.Provider value={{widget,setWidget}}>
        {children}
    </WidgetContext.Provider>
    )
}

export const useWidget = () => {
    const context = useContext(WidgetContext)
    if (!context){
        throw new Error("Use widget must be wrapped in Widget Provider")
    }
    return context
}