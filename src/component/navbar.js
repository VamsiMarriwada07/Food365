import '../styles/navbar.css'
import { UtensilsCrossed, ShieldHalf, PlusCircle} from 'lucide-react';
import React from 'react';
import Text from './text';



export default function Navbar(){
    return(
        <div className="bg">
            <div className='hehe flex flex-row justify-evenly items-center'>
                <div className="logo flex flex-row">
                    <div><h1 className='text-5xl font-bold text-white italic hover:font-semibold'><a href="/">Food 365</a></h1></div>
                </div>
                <div className="options flex flex-row justify-evenly">
                    <div className="hover:font-bold text-white item">
                        <div className='pic mb-1'><a href="/restaurants"><UtensilsCrossed/></a></div>
                        <div><p className='info'>Hotel</p></div>
                    </div>
                    <div className="hover:font-bold text-white item">
                        <div className='pic mb-1'><a href="/Addhotel"><PlusCircle/></a></div>
                        <div><p className='info'>Add Hotel</p></div>
                    </div>
                    <div className="hover:font-bold text-white item">
                        <div className='pic mb-1'><a href="https://y2aq2gfg.pegace.net/prweb/PRAuth/app/foods365/" target="_incognito" rel="noopener noreferrer"><ShieldHalf/></a></div>
                        <div><p className='info'>Admin</p></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center h-96'>
                {<Text/>}
            </div>
        </div> 
    ) 
}