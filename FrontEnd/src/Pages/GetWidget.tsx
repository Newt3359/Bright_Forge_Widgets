import {WidgetCards} from "../Components/WidgetCards.tsx";
import {useEffect, useState} from "react";
import type {Widget} from "../Utils/Widget.ts";
import {getAllWidgets} from "../Utils/YellowPages.ts";


function GetWidget(){

    const handleBuy = (id: number) => {
        setWidgets(prevWidgets =>
            prevWidgets.map(widget =>
                widget.id === id
                    ? {
                        ...widget,
                        warehouseLot: widget.warehouseLot.map(lot => ({
                            ...lot,
                            quantity: lot.quantity - 1
                        }))
                    }
                    : widget
            )
        );
    };

    const [widgets, setWidgets] = useState<Widget[]>([])

    useEffect(() => {
        const fetchWidgets = async () => {
            try {
               const response = await getAllWidgets()
                console.log(response)
                setWidgets(response)
            }catch (err){
                console.log(err)
            }
        }
        fetchWidgets()
    }, [])

    console.log(widgets.map(widget => widget.id))

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