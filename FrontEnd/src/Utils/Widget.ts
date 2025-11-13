export const ColorTypes = [
    { ColorId: 1, code: "Blu", label: "Blue", hex: "#3185FC" },
    { ColorId: 2, code: "Cor", label: "Coral", hex: "#EFBCD5" },
    { ColorId: 3, code: "Yel", label: "Yellow", hex: "#F9DC5C" },
    { ColorId: 4, code: "Red", label: "Red", hex: "#E84855" }
] as const;

export const LifeCycleTypes = [
    {lifeCycleId: 1, lifeCycleStatus: "Active"},
    {lifeCycleId: 2, lifeCycleStatus: "OSS_Permanent"},
    {lifeCycleId: 3, lifeCycleStatus: "Retired"},
    {lifeCycleId: 4, lifeCycleStatus: "Deleted"}
]

export type ColorType = (typeof ColorTypes)[number]["label"];

export type WidgetColor = (typeof ColorTypes)[number]

export type Widget = {
    id: number;
    title: string;
    description: string;
    rating: number;
    slug: string;
    colors: WidgetColor[];
    image: {
        imageId?: number;
        imgUrl: string;
    }[];
    warehouseLot: {
        lotNumber?: number;
        created: string;
        lastEdit: string | null;
        quantity: number;
        lifeCycleStatus: string;
    }[];
};