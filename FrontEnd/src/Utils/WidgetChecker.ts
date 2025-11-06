import {ColorTypes,type Widget} from "./Widget.ts";


export const widgetChecker = (widget: Widget) : string[] => {
    const errors: string[] = [];

    if (!widget.title.trim()){
        errors.push("Title is required")
    }

    if (!widget.description.trim()){
        errors.push("Description is required")
    }

    // if (!widget.image[0].imgUrl.trim()){
    //     errors.push("Icon or image required")
    // }

    if (widget.rating <= 0 || widget.rating >5){
        errors.push("rating must be above 0 and below 5")
    }

    if (widget.colors.length === 0){
        errors.push("Must select one color")
    }

    // @ts-ignore
    // if (widget.colors.some((c) => !ColorTypes.includes(c.label))){
    //     errors.push("Color Selection is invalid")
    // }
    return errors
}