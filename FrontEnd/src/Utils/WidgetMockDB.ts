import type {Widget} from "./Widget.ts";
import zap from "../assets/zap.png"
import pulse from "../assets/heart-pulse.png"
import money from "../assets/piggy-bank.png"
import star from "../assets/star.png"

export const WidgetMockDB:Widget[]=[
{
    id:1,
    title: "Zeus",
    description: "Find a charge anywhere",
    icon: zap,
    price: 15.99,
    quantity: 2,
    colors: ["Yellow" ,"Coral"]
},
{
    id:2,
    title: "Vitality",
    description: "Manage your health",
    icon: pulse,
    price: 25.99,
    quantity: -1,
    colors: ["Coral"]
},
{
    id:3,
    title: "Tycoon",
    description: "Manage your wealth",
    icon: money,
    price: 35.99,
    quantity: 12,
    colors: ["Blue", "Yellow"]
},
{
    id:4,
    title: "Star Gazer",
    description: "View the stars through a whole new lens",
    icon: star,
    price: 3.99,
    quantity: 4,
    colors: ["Blue", "Yellow", "Coral", "Pink"]
}
]