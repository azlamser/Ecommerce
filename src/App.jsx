import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/nav"
import Store from "./components/Store"
import OrderNow from "./components/OrderNow"
import ContactUs from "./components/ContactUs"
function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Store" element={<Store />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/OrderNow" element={<OrderNow />} />


                </Routes>



            </BrowserRouter>

        </>
    )

}
export default App