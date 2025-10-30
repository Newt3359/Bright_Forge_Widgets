
import {AddWidgetForm} from "../Components/AddWidgetForm.tsx";
import {WidgetManager} from "../Utils/WidgetContext.tsx";
import {WidgetCards} from "../Components/WidgetCards.tsx";
import {useState} from "react";
import type {Widget} from "../Utils/Widget.ts";
import {WidgetMockDB} from "../Utils/WidgetMockDB.ts";
function WorkShop(){

    const [widgets, setWidgets] = useState<Widget[]>(WidgetMockDB)
    const [edit, setEdit] = useState(true)
    const [remove, setRemove] = useState(true)
    const [add, setAdd] = useState(false)

    const handleEdit = (widget : Widget) => {

    }

    const handleDelete = (widget : Widget) => {

    }

    const handleNewWidget =() =>{
        setAdd(!add)
    }



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
                    <WidgetCards widget={widget}
                    onEdit={(w) => handleEdit(w.id)}
                    onDelete={(w) => handleDelete(w.id)}/>)}
                </div>
            </WidgetManager>
        </>
    )
}

export default WorkShop