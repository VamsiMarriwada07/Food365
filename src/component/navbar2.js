import '../styles/navbar2.css'
import { UtensilsCrossed} from 'lucide-react';
import React from 'react';


export default function Navbar2(){
    return(
        <div className="main flex flex-row items-center justify-around bg-[#03071e]">
            <div className="logo flex flex-row items-center">
            <h1 className='text-5xl text-white font-bold italic hover:font-semibold hover:text-[#9d0208] duration-150'><a href="/">Food 365</a></h1>
            </div>
            <div className="options flex flex-row justify-around">
                <div className="hover:font-bold text-white hover:text-[#9d0208] duration-150 item">
                    <div className='pic mb-1'><a href="/restaurants"><UtensilsCrossed/></a></div>
                    <div><p className='info'>Hotel</p></div>
                </div>
            </div>
        </div> 
    )
}