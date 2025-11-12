import {WidgetCards} from "../Components/WidgetCards.tsx";
import {useEffect, useState} from "react";
import {ColorTypes, type Widget} from "../Utils/Widget.ts";
import {getAllWidgets} from "../Utils/YellowPages.ts";
import {WidgetSearchAndFilter} from "../Components/WidgetSerachAndFilter.tsx";


function GetWidget(){

    const [widgets, setWidgets] = useState<Widget[]>([])
    const [searchResults, setSearchResults] = useState<Widget[]>([])
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedColor, setSelectedColor] = useState("")

    const availableColorLabels = Array.from(
        new Set(
            widgets.flatMap(w => w.colors.map(c => c.label))
        )
    );

    const availableColors = ColorTypes.filter(c =>
        availableColorLabels.includes(c.label)
    );
    const handleBuy = (id: number) => {
        setWidgets(prevWidgets =>
            prevWidgets.map(widget =>
                widget.id === id
                    ? {
                        ...widget,
                        warehouseLot: widget.warehouseLot.map(lot => ({
                            ...lot,
                            quantity: lot.quantity - 1
                        }))
                    }
                    : widget
            )
        );
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        handleSearchAndFilter(query, selectedColor);
    };

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        handleSearchAndFilter(searchQuery, color);
    };

    useEffect(() => {
        const fetchWidgets = async () => {
            try {
               const response = await getAllWidgets()
                console.log(response)
                setWidgets(response)
            }catch (err){
                console.log(err)
            }
        }
        fetchWidgets()
    }, [])

    const handleSearchAndFilter = (query: string, color: string) => {
        const lowerQuery = query.toLowerCase();

        const results = widgets.filter(widget => {
            const matchesText =
                widget.title?.toLowerCase().includes(lowerQuery) ||
                widget.description?.toLowerCase().includes(lowerQuery);

            const matchesColor =
                !color || widget.colors.some(c => c.label.toLowerCase() === color.toLowerCase());

            return matchesText && matchesColor;
        });

        setSearchResults(results);
    };

    const widgetsToDisplay = searchResults.length > 0 || searchQuery
        ? searchResults
        : widgets

    return(
        <>
            <h1 className={"flex justify-center items-center"}>Get Widget</h1>

            <WidgetSearchAndFilter value={searchQuery} onSearchChange={handleSearchChange} selectedColor={selectedColor} onColorChange={handleColorChange} colors={availableColors}/>
            {searchQuery && searchResults.length === 0 && (
                <p className={"flex content-center justify-center"}>No Results Found</p>
            )}
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center"}>
                {widgetsToDisplay.map(widget => <WidgetCards key = {widget.id} widget = {widget} onBuy={(w) => handleBuy(w.id)}/>)}
            </div>
        </>
    )
}

export default GetWidget