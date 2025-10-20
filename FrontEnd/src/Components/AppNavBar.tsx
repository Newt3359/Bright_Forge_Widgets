import logo from "../assets/BFW_Logo.png";
import {Anvil, Home, Package} from "lucide-react";
import {useLocation, useNavigate} from "react-router-dom";



export function AppNavBar(){

    const navigate = useNavigate();

    const location = useLocation();

    const  currentPage = location.pathname

    const handleHome = () =>{
        navigate("/");
    }

    const handleResults = () => {
        navigate("/get-widget")

    }

    const handleWorkshop = () => {
      navigate("/workshop")
    }

    return(
        <>
        <nav className={"border-b-2 border-[#EFB9D5]/30 bg-white text-[#403F4C] shadow-md"}>
            <div className={"max-w-12xl mx-auto px-4 sm:px-6 lg:px-8"}>
                <div className={"flex items-center justify-between h-15"}>
                    <div className={"flex items-center"}>
                        <img src={logo} alt={"Bright Forge Widget Logo"} className={"h-12 w-auto"}/>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <button
                            onClick={handleHome}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                                currentPage === "/"
                                    ? "bg-[#3185FC] text-white shadow-md"
                                    : "text-[#403F4C] hover:bg-[#EFB9D5]/30"
                            }`}
                        >
                            <Home className="w-4 h-4" />
                            <span>Home</span>
                        </button>

                        <button
                            onClick={handleResults}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                                currentPage === "/get-widget"
                                    ? "bg-[#3185FC] text-white shadow-md"
                                    : "text-[#403F4C] hover:bg-[#EFB9D5]/30"
                            }`}
                        >
                            <Package className="w-4 h-4" />
                            <span>Get Widget</span>
                        </button>

                        <button
                            onClick={handleWorkshop}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                                currentPage === "/workshop"
                                    ? "bg-[#3185FC] text-white shadow-md"
                                    : "text-[#403F4C] hover:bg-[#EFB9D5]/30"
                            }`}
                        >
                            <Anvil className="w-4 h-4" />
                            <span>Workshop</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}