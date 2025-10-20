import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {AppNavBar} from "./Components/AppNavBar.tsx";
import SplashPage from "./Pages/SplashPage.tsx";
import GetWidget from "./Pages/GetWidget.tsx";
import WorkShop from "./Pages/WorkShop.tsx";


function App() {


  return (
    <>
        <Router>
            <AppNavBar/>
            <Routes>
                <Route path="/" element={<SplashPage/>}/>
                <Route path="/get-widget" element={<GetWidget/>}/>
                <Route path="/workshop" element={<WorkShop/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
