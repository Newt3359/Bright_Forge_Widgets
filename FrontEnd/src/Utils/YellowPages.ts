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
