import * as React from "react";
import {widgetFormSubmit} from "../Utils/YellowPages.ts";
import {ImageUpload} from "./ImageUpload.tsx";
import {useWidget} from "../Utils/WidgetContext.tsx";
import {widgetChecker} from "../Utils/WidgetChecker.ts";
import {ColorTypes} from "../Utils/Widget.ts";




interface AddWidgetFormProps {
    handleNewWidget: () => void,

}

export const AddWidgetForm = ({handleNewWidget}: AddWidgetFormProps) => {

    const {widget, setWidget} = useWidget();


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()


        const updatedWidget = ({
            ...widget,
            slug: widget.title + "-" + widget.rating,

            warehouseLot: [
                {
                    ...widget.warehouseLot[0],
                    created: Date.now().toString(),
                    lifeCycleStatus: "Active"
                }
            ]
            // image: [
            //     {
            //         ...widget.image[0],
            //         imageId:
            //     }
            // ]
        });


        const errors = widgetChecker(widget)
        if (errors.length > 0) {
            alert("Fix the following errors:\n" + errors.join("\n"))
            return
        }
        setWidget(updatedWidget)
        console.log(updatedWidget)
        await widgetFormSubmit(widget)
    }

    const handleColorChange = (colorLabel: string) => {
        const colorObject = ColorTypes.find (c => c.label === colorLabel)
        if (!colorObject) return;

        const alreadySelected = widget.colors.some(c => c.label === colorLabel)

        const updatedColors = alreadySelected
        ? widget.colors.filter(c => c.label !== colorLabel)
            : [...widget.colors, colorObject]

        setWidget({...widget, colors: updatedColors})
    };

    return (
        <>
            <div className={"bg-white flex justify-center content-center border-2 shadow-md"}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <ImageUpload/>
                    </div>

                    <div className={"mt-3"}>
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
                        <label>Rating:
                            <input
                            className={"border-1 m-0.5"}
                            value={widget.rating}
                            onChange={(e) => {const updatedRating = Number (e.target.value); setWidget({...widget, rating: updatedRating})}}
                            type={"number"}
                            min={0}
                            max={5}
                            step={0.01}
                            />
                        </label>
                    </div>

                    <div>
                        <label>Quantity:
                            <input
                                className={"border-1 m-1"}
                                type={"number"}
                                value={widget.warehouseLot[0].quantity}
                                onChange={(e) => { const updatedQuantity = Number(e.target.value); setWidget ({...widget, warehouseLot: [{...widget.warehouseLot[3], quantity: updatedQuantity}]})}}
                            />
                        </label>
                    </div>

                    <div>
                        <label>Colors:
                            {ColorTypes.map((color) => (
                                <label key={color.ColorId}>
                                    <input
                                        type="checkbox"
                                        checked={widget.colors.includes(color)}
                                        onChange={() => handleColorChange(color.label)}
                                        className={"m-1"}
                                    />{color.label}
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

// <div>
//     <label>
//         <input/>
//     </label>
// </div>