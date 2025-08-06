import shirt from "../assets/image.png"
function BoyDetail(props ){

    return(<>

    
    <div className="flex w-[250px] h-[200px] flex-col overflow-hidden  m-4 p-2 rounded-xl  shadow-orange-100 shadow-2xs hover:scale-105 "   >
        <div className=" rounded-[10px] overflow-hidden ">
        <img src={props.image || shirt} alt="shirt image" className=""/>
    </div>
    <div className=" flex justify-between w-full pb-[30px] text-center mt-4">
    <span className="pl-4 font-[600] text-[16px]  font-sans">{props.title || "shirt" }</span>
    <span className="pr-4"> {props.price ||"$999"}</span>
    </div>
  
    </div>
    </>)

}
export default BoyDetail