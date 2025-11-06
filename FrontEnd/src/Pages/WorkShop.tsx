
import {AddWidgetForm} from "../Components/AddWidgetForm.tsx";
import {WidgetManager} from "../Utils/WidgetContext.tsx";
import {WidgetCards} from "../Components/WidgetCards.tsx";
import {useEffect, useState} from "react";
import type {Widget} from "../Utils/Widget.ts";
import {getAllWidgets} from "../Utils/YellowPages.ts";
function WorkShop(){

    const [widgets, setWidgets] = useState<Widget[]>([])
    const [edit, setEdit] = useState(true)
    const [remove, setRemove] = useState(true)
    const [add, setAdd] = useState(false)

    const handleEdit = (id: number) => {

    }

    const handleDelete = (id: number) => {
        setWidgets(prev => prev.filter(widget => widget.id !== id))
    }

    const handleNewWidget =() =>{
        setAdd(!add)
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
                {add && (
                    <div className={"flex content-center justify-center"}>
                        <AddWidgetForm handleNewWidget={handleNewWidget}/>
                    </div>
                )}
                <div className={"flex justify-center items-center"}>
                    {widgets.map(widget =>
                    <WidgetCards key={widget.id} widget={widget}
                    onEdit={(widget) => handleEdit(widget.id)}
                    onDelete={(widget) => handleDelete(widget.id)}/>)}
                </div>
            </WidgetManager>
        </>
    )
}

export default WorkShop