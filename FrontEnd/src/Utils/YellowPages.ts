import axios from "axios";
import type {Widget} from "./Widget.ts";


export const uploadImage = async (file: File, onUploadProgress: any):Promise<any> =>{
    let formData = new FormData();

    formData.append("file", file)

    return axios.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress
    })
}

export const getFiles = () : Promise<any> => {
    return axios.get("/files")
}

export const widgetFormSubmit = async (widget:Widget): Promise<Widget> =>{
    const result = await axios.post('/api/widget', widget)
    return result.data
}

export const editWidgetSubmit = async (widget : Widget) : Promise<number> => {
    console.log(widget)
    const result = await axios.patch('/api/widget/' + widget.id, widget)
    console.log(result.status)
    return result.status

}

export const getAllWidgets = async () : Promise<any> => {
    const result = await axios.get('/api/widget')
    console.log(result.status)
    return result.data
}


