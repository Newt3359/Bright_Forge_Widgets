import logo from "../assets/BFW_Logo.png"

function SplashPage(){

    return(
    <>
        <div className={"min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden"}>
            <div className="text-center max-w-2xl px-6 relative z-10">
                <div className="mb-8 flex justify-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <img src={logo} alt={"Bright Forge Widget Logo"} className={"w-48 h-auto"}/>
                    </div>
                </div>
                    <h1 className="text-[#403F4C] mb-4">Welcome to Bright Forge Widgets</h1>
                    <p className="text-[#403F4C]/80 mb-8">
                        Forge the future with us at Bright Forge Widgets and our large selection of Premium Widgets.
                    </p>
            </div>
        </div>
    </>
    )
}

export default SplashPage