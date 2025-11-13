
import {AddWidgetForm} from "../Components/AddWidgetForm.tsx";
import {WidgetManager} from "../Utils/WidgetContext.tsx";
import {WidgetCards} from "../Components/WidgetCards.tsx";
import {useEffect, useState} from "react";
import type {Widget} from "../Utils/Widget.ts";
import {getAllWidgets} from "../Utils/YellowPages.ts";
function WorkShop(){

    const [widgets, setWidgets] = useState<Widget[]>([])
    const [showForm, setShowForm] = useState(false)
    const [selectedWidget, setSelectedWidget] = useState<Widget|null>(null)

    const handleEdit = (widget : Widget) => {
        setSelectedWidget(widget)
        console.log(widget)
        setShowForm(!showForm)
    }

    const handleNewWidget =() =>{
        setSelectedWidget(null)
        setShowForm(!showForm)
    }

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



    return(
        <>
        <h1 className={"flex justify-center content-center"}>Workshop</h1>
            <WidgetManager>
                <div className={"flex justify-center content-center"}>
                    <button onClick={() => handleNewWidget()} className={"border-2 bg-[#3185FC] text-white shadow-md p-0.5 m-2 w-36 h-12"}>Add Widget</button>
                </div>
                {showForm && (
                    <div className={"flex content-center justify-center"}>
                        <AddWidgetForm handleNewWidget={handleNewWidget} widgetToEdit={selectedWidget} onEdit={handleEdit}/>
                    </div>
                )}
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center"}>
                    {widgets.map(widget =>
                    <WidgetCards key={widget.id} widget={widget}
                    onEdit={() => handleEdit(widget)}
                    />)}
                </div>
            </WidgetManager>
        </>
    )
}

export default WorkShop