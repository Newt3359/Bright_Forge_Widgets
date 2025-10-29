
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

    const handleEdit = (id: number) => {

    }

    const handleDelete = (id: number) => {

    }

    return(
        <>
        <h1>Workshop</h1>
            <WidgetManager>
                <AddWidgetForm/>
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