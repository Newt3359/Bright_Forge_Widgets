import * as React from "react";
import {widgetFormSubmit} from "../Utils/YellowPages.ts";
import {ImageUpload} from "./ImageUpload.tsx";
import {useWidget} from "../Utils/WidgetContext.tsx";
import {widgetChecker} from "../Utils/WidgetChecker.ts";

import {AVAILABLE_COLORS, type Color} from "../Utils/Widget.ts";


export const AddWidgetForm = () => {

    const {widget, setWidget} = useWidget();


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        const errors = widgetChecker(widget)
        if (errors.length > 0){
            alert("Fix the following errors:\n" + errors.join("\n"))
            return
        }

        await widgetFormSubmit(widget)
    }

    const handleColorChange = (color: Color) => {
        const alreadySelected = widget.colors.includes(color);

        const updatedColors = alreadySelected
            ? widget.colors.filter((c) => c !== color)
            : [...widget.colors, color];

        setWidget({ ...widget, colors: updatedColors });
    };

    return(
        <>
            <div className={"bg-white max-w-max"}>
                <form onSubmit={handleSubmit}>
                    <div>
                    <ImageUpload/>
                    </div>

                    <div>
                        <label>Title:
                            <input
                            type={"text"}
                            value={widget.title}
                            onChange={(e) => setWidget({...widget, title: e.target.value})}
                            />
                        </label>
                    </div>

                    <div>
                        <label>Description:
                            <input
                            type={"text"}
                            value={widget.description}
                            onChange={(e) => setWidget({...widget, description: e.target.value})}
                            />
                        </label>
                    </div>

                    <div>
                        <label> Price:
                            <input
                            type={"number"}
                            step={"0.01"}
                            value={widget.price}
                            onChange={(e)=> setWidget({...widget, price: Number(e.target.value)})}
                            />
                        </label>
                    </div>

                    <div>
                        <label>Quantity:
                            <input
                            type={"number"}
                            value={widget.quantity}
                            onChange={(e) => setWidget({...widget, quantity: Number(e.target.value)})}
                            />
                        </label>
                    </div>

                    <div>
                        <label>Colors:
                        {AVAILABLE_COLORS.map((color) => (
                            <label key={color}>
                                <input
                                    type="checkbox"
                                    checked={widget.colors.includes(color)}
                                    onChange={() => handleColorChange(color)}
                                    className={"m-1"}
                                />{color}
                            </label>
                        ))}
                        </label>
                    </div>
                </form>
            </div>
        </>
    )
}