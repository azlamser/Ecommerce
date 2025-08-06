
import { Link } from "react-router-dom"
function Nav(){
    return (
        <>
        <nav className="flex flex-row bg-orange-500 flex-" > 
<Link to={"/"} className="link ">Home</Link>
<Link to={"store"} className="link">Store</Link>
<Link to={"/OrderNow"} className="link"> Order Now</Link>
<Link to={"/contactUs"} className="link">Contact Us</Link>



        </nav>
        </>
    )

}
export default Nav