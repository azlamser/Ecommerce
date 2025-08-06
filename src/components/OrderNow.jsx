import { useRef } from "react";
import BoyDetail from "./Boys";

function OrderNow() {
  const done = useRef(null);
  const hide = useRef(null);
  const btnHide=useRef(null);

  function orderDone() {
    setTimeout(() => {
         const hi = hide.current.style;
    const don = done.current.style;
const btnhi=btnHide.current.style;
btnhi.display="none"
    don.display = "block";
    don.width = "300px";
   don.color="orange"
    don.height = "300px";
    don.textAlign = "center";
    don.fontSize = "32px";
    don.margin = "auto";
don.marginTop="20px"
don.borderRadius="20px"
don.alignItem="center"
    don.transition = "all 200ms ease 500ms";
    }, 2000);
   
  }

  return (
    <>
      <div ref={hide}>
        <div className="h-[300px] w-[500px] shadow-2xl rounded-3xl m-auto mt-[50px]">
          <h3 className="text-center text-3xl uppercase font-[700] underline">order detail</h3>
          <div className="flex justify-evenly items-center">
            <div>
              <BoyDetail />
            </div>
            <h3 className="font-[500]">
              <span>
                <pre>price:          $999</pre>
              </span>
              <br />
              <span>
                <pre>discount:       15%</pre>
              </span>
              <br />
              <span>
                <pre>total:          ${999 - (999 * 15) / 100}</pre>
              </span>
            </h3>
          </div>
        </div>
        <div className="text-center" ref={btnHide}>
          <button
            className="p-3 rounded-2xl bg-blue-600 text-white m-5 hover:bg-blue-900"
            onClick={orderDone}
          >
            Order Now
          </button>
          <button className="p-3 rounded-2xl bg-red-600 text-white m-5">
            Cancel
          </button>
        </div>
      </div>

      <div
        ref={done}
        style={{ display: "none" }} // initially hidden
      >
        Order Successful
      </div>
    </>
  );
}

export default OrderNow;
