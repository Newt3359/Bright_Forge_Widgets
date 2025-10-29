import {AVAILABLE_COLORS, type Widget} from "./Widget.ts";


export const widgetChecker = (widget: Widget) : string[] => {
    const errors: string[] = [];

    if (!widget.title.trim()){
        errors.push("Title is required")
    }

    if (!widget.description.trim()){
        errors.push("Description is required")
    }

    if (!widget.icon.trim()){
        errors.push("Icon or image required")
    }

    if (widget.price <= 0){
        errors.push("price must be grater than 0$")
    }

    if (widget.colors.length === 0){
        errors.push("Must select one color")
    }

    if (widget.colors.some((c) => !AVAILABLE_COLORS.includes(c))){
        errors.push("Color Selection is invalid")
    }
    return errors
}