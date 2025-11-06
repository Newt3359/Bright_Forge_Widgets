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

    const {
        title,
        description,
        rating,
        warehouseLot: [{quantity}],
    } = widget;

    // {widget.colors.join(" ")}
    return(
        <>
            <Card style={{width: '20rem', height: "18rem" }} className={"m-4 border border-black shadow-md"}>

                {widget.image.map(img => (
                    <img
                        key={img.imageID}
                        src={`http://localhost:8080${img.imgUrl}`}
                        alt={widget.title}
                        className={"h-24 w-24"}
                    />
                ))}

                <div className={"absolute top-1 right-1  m-1 text-right inline-flex gap-1"}>
                {widget.colors.map(color =>  (
                <p key={color.ColorId} >{color.label}</p>
                ))}
                </div>
                <CardBody>
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p className={"absolute bottom-7"}><label>Rating:</label>{rating}</p>
                        <p className={"absolute bottom-7 right-5"}><label>Qty:</label>{quantity}</p>
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