
import * as React from "react";
import {createContext, useContext, useState} from "react";
import type {Widget} from "./Widget.ts";


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
        rating: 0,
        slug: "",
        colors: [],
        image: [
            {
                imageId: 0,
                imgUrl: "0"
            }
        ],
        warehouseLot: [
            {
                lotNumber: 0,
                created: "",
                lastEdit: "",
                lifeCycleStatus: "",
                quantity: 0
            }
        ]



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