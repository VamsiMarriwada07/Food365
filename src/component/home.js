import React,{useEffect, useState,useContext} from "react"
import { resContext } from "../contexts/restaurantContext";
import Navbar from "./navbar"
import Cards from "./card"
import '../styles/products.css';
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const {setCategory} = useContext(resContext)
    const navigate = useNavigate()
    const [randomData,setRandomData] = useState([])
    const fetchInfo = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php",{method:'GET'})
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setRandomData(data.categories)
        })
        .catch(e=>console.log(e))

    }
    useEffect((async)=>{
        fetchInfo();
    },[])
    const handleClick = (item) =>{
        setCategory(item.strCategory);
        navigate("/restaurants")
        console.log(item)
    };
    return(
        <div>
            <Navbar/>
            <div>
                <p className="text-4xl ml-28 mt-6 font-extrabold">What's on your mind?</p>
            </div>
            <div className="new">
            {randomData.map((item)=>(
                    <Cards key={item.idCategory} item={item} handleClick={handleClick}/>
            ))}
            </div>
            <Footer/>
        </div>
    )
}