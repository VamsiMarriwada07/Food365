import React from "react"
import Navbar2 from "./navbar2";
import Footer from "./footer";

export default function Restaurants(){
    return(
        <div className="h-screen overflow-y-scroll no-scrollbar">
            <div className="sticky top-0"><Navbar2/></div>
            <div className=" h-[735px] w-screen flex flex-row items-center mt-0 justify-around">
                <iframe title="test" src="../Order.html" width="100%" style={{height:"720px"}} loading="lazy"></iframe>
            </div>
            <Footer/>

        </div>
    )
}