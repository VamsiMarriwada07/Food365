import React from "react"
import Navbar2 from "./navbar2";
import ImageUploader from "./linkMaker";

export default function Addhotel(){
    return(
        <div className="h-screen overflow-y-scroll no-scrollbar">
            <div className="sticky top-0"><Navbar2/></div>
            <div className=" h-screen w-screen flex flex-row items-center mt-10 justify-around">
                <iframe title="test" src="../restuarants.html" width="60%" height="100%" style={{borderRadius:10}} loading="lazy"></iframe>
                <ImageUploader/>
            </div>
            

        </div>
        
    )
}