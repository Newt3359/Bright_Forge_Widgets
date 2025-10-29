import {WidgetCards} from "../Components/WidgetCards.tsx";
import {useState} from "react";
import type {Widget} from "../Utils/Widget.ts";
import {WidgetMockDB} from "../Utils/WidgetMockDB.ts";


function GetWidget(){

    const handleBuy = (id: number) => {
        setWidgets(prevWidgets =>
            prevWidgets.map(widget =>
                widget.id === id
                ? {...widget, quantity: Math.max(widget.quantity -1) }
                    : widget
            )
        )
    }

    const [widgets, setWidgets] = useState<Widget[]>(WidgetMockDB)

    return(
        <>
            <h1 className={"flex justify-center items-center"}>Get Widget</h1>
            <div className={"flex justify-center items-center"}>
                {widgets.map(widget => <WidgetCards key = {widget.id} widget = {widget} onBuy={(w) => handleBuy(w.id)}/>)}
            </div>
        </>
    )
}

export default GetWidget