import * as React from "react";
import {widgetFormSubmit} from "../Utils/YellowPages.ts";
import {ImageUpload} from "./ImageUpload.tsx";
import {useWidget} from "../Utils/WidgetContext.tsx";
import {widgetChecker} from "../Utils/WidgetChecker.ts";

import {AVAILABLE_COLORS, type Color} from "../Utils/Widget.ts";


interface AddWidgetFormProps {
    handleNewWidget: () => void,

}

export const AddWidgetForm = ({handleNewWidget}: AddWidgetFormProps) => {

    const {widget, setWidget} = useWidget();


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()


        const errors = widgetChecker(widget)
        if (errors.length > 0) {
            alert("Fix the following errors:\n" + errors.join("\n"))
            return
        }
        console.log(widget)
        await widgetFormSubmit(widget)
    }

    const handleColorChange = (color: Color) => {
        const alreadySelected = widget.colors.includes(color);

        const updatedColors = alreadySelected
            ? widget.colors.filter((c) => c !== color)
            : [...widget.colors, color];

        setWidget({...widget, colors: updatedColors});
    };

    return (
        <>
            <div className={"bg-white w-96 flex justify-center content-center border-2 shadow-md"}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <ImageUpload/>
                    </div>

                    <div>
                        <label className={"m-1"}>Title:
                            <input
                                className={"placeholder:text-gray-400 placeholder:font-light border-1 ml-0.5"}
                                placeholder={"Heavenly Widget"}
                                type={"text"}
                                value={widget.title}
                                onChange={(e) => setWidget({...widget, title: e.target.value})}
                            />
                        </label>
                    </div>

                    <div className={"m-1"}>
                        <label>Description:
                            <textarea
                                className={"placeholder:text-gray-400 placeholder:font-light border-1 m-0.5 w-full h-32"}
                                placeholder={"What your premier widget does"}
                                value={widget.description}
                                onChange={(e) => setWidget({...widget, description: e.target.value})}
                            >
                            </textarea>
                        </label>
                    </div>

                    <div>
                        <label> Price:
                            <input
                                className={"border-1 m-1"}
                                type={"number"}
                                step={"0.01"}
                                value={widget.price}
                                onChange={(e) => setWidget({...widget, price: Number(e.target.value)})}
                            />
                        </label>
                    </div>

                    <div>
                        <label>Quantity:
                            <input
                                className={"border-1 m-1"}
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

                    <div className={"flex content-center justify-center"}>
                        <button className={"border-2 bg-[#3185FC] text-white shadow-md p-1 m-2"} type={"button"}
                                onClick={() => handleNewWidget()}>Close
                        </button>
                        <button className={"border-2 bg-[#3185FC] text-white shadow-md p-1 m-2"} type={"button"}
                                onClick={handleSubmit}>Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}