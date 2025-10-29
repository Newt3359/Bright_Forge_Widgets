export type Color = "Yellow" | "Coral" | "Pink" | "Blue";
export const AVAILABLE_COLORS : Color[] = ["Yellow", "Coral", "Pink", "Blue"]

export type Widget = {
    id:number
    title: string,
    description: string,
    icon: string,
    price: number,
    quantity: number,
    colors: Color[];
}