import type {Widget} from "../Utils/Widget.ts"
import {Card, CardBody} from "reactstrap";
import * as React from "react";

interface WidgetCardProps {
    widget: Widget
    onBuy?: (widget:Widget) => void;
    onEdit?: (widget:Widget) => void;
    onDelete?: (widget:Widget) => void;
}

export const WidgetCards : React.FC<WidgetCardProps> = ({
    widget,
    onBuy,
    onEdit,
    onDelete,
    }) =>{

    return(
        <>
            <Card style={{width: '20rem', height: "18rem" }} className={"m-4 border border-black shadow-md"}>
                <img src={widget.icon} className={"w-10 h-10 flex "} alt={widget.title}/>
                <p className={"absolute top-1 right-1 text-right"}>{widget.colors.join(" ")}</p>
                <CardBody>
                    <div>
                        <h3>{widget.title}</h3>
                    </div>
                    <div>
                        <p>{widget.description}</p>
                    </div>
                    <div>
                        <p className={"absolute bottom-7"}><label>Price:</label>{widget.price}</p>
                        <p className={"absolute bottom-7 right-5"}><label>Qty:</label>{widget.quantity}</p>
                    </div>
                </CardBody>
                <div className={"flex justify-center content-center"}>
                    {onBuy && (
                        <button
                        onClick={() => onBuy(widget)}
                        className={"border-2 bg-[#3185FC] text-white shadow-md w-20 p-1 m-2"}
                        >Buy
                        </button>
                    )}
                    {onEdit && (
                        <button
                            onClick={() => onEdit(widget)}
                            className={"border-2 bg-[#3185FC] text-white shadow-md p-1 m-2 w-20"}
                        >Edit
                        </button>
                    )}
                    {onDelete && (
                        <button
                            onClick={() => onDelete(widget)}
                            className={"border-2 bg-[#3185FC] text-white shadow-md w-20 p-1 m-2"}
                        >Delete
                        </button>
                    )}
                </div>
            </Card>
        </>
    )


}