import type {WidgetColor} from "../Utils/Widget.ts";

interface WidgetSearchBarProps {
    value: string;
    onSearchChange : (value: string) => void;
    selectedColor: string;
    onColorChange: (color: string) => void;
    colors: WidgetColor[];
}

export function WidgetSearchAndFilter({value, onSearchChange, selectedColor, onColorChange, colors}:WidgetSearchBarProps){



    return(
        <div className={"flex justify-center content-center mt-3"}>
            <label className="mr-3">
                Search:
                <input
                    name={"Search"}
                    className={"border border-black bg-white"}
                    type="text"
                    placeholder="Search by title or description."
                    style={{width: '325px', marginLeft: "5px"}}
                    value={value}
                    onChange={(e) => onSearchChange(e.target.value)}/>
            </label>

            <select
            value={selectedColor}
            onChange={(e) => onColorChange(e.target.value)}
            className={"bg-white border-2"}
            >
                <option value={""}>All Colors</option>
                {colors.map((color) => (
                    <option key={color.ColorId} value={color.label}>
                        {color.label}
                    </option>
                ))}
            </select>
        </div>
    );
}