import '../styles/card.css'

const Cards = ({item, handleClick}) => {
    const {strCategoryThumb,strCategory}=item;
    return(
        <div className="card w-92 mx-10 p-5 rounded-3xl hover:shadow-2xl shadow-cyan-500/50 transition duration-100 ease-in-out" onClick={() => handleClick(item)}>
            <div className="pic flex justify-center items-center h-52">
                <img src={strCategoryThumb} width={180}  alt=""/>
            </div>
            <div className="text-center details ">
                <p className="font-bold text-xl">{strCategory}</p>
            </div>
        </div>
    ) 
}

export default Cards;

