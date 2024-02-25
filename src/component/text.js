import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter';
export default function text(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text] = useTypewriter({
        words:['New Dishes','New Taste','more..'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80,
    });
    return(
        <div className="flex justify-center items-center mt-5 mb-8" >
            <div>            
                <h1 style={{color:"white",fontSize:'46px'}}>
                    Explore {" "}
                    <span style={{fontWeight:'bold',color:'white'}}>
                        {text}
                    </span>
                    <span style={{color:'red'}}>
                    <Cursor cursorStyle='✨'/>
                    </span>
                </h1>
            </div>
        </div>
        
    );
}