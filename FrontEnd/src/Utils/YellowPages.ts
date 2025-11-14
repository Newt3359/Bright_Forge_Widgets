import axios from "axios";
import type {Widget} from "./Widget.ts";


export const widgetFormSubmit = async (widget:Widget): Promise<Widget> =>{
    const result = await axios.post('/api/widget', widget)
    return result.data
}
export const getAllWidgets = async () : Promise<any> => {
    const result = await axios.get('/api/widget')
    console.log(result.status)
    return result.data
}

export const uploadImage = (formData: FormData) => {
    return axios.post(`/api/widget/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};

export const updateWidget = async  (widget:Widget): Promise<Widget> => {
    const result = await axios.patch('/api/widget/' + widget.id, widget)
    return result.data
}
