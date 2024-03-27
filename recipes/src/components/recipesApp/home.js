import { recipesContext } from "./recipes";
import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";


export default function RecipesHome(){
    let {data, detailId, showDetails, isFav, favorites} = useContext(recipesContext)
    const [stateId, setStateId] = detailId
    const [stateShow, setStateShow] = showDetails
    const [stateData, setStateData] = data
    const [stateFavor, setStateFavor] = favorites
    const [stateIsFav, setStateIsFav] = isFav
    const [load, setLoad] = useState(4)

    function detailDisplay(id){
        setStateId(id)
        setStateShow(true)
        
        stateFavor.some(item => item.id === id) ? setStateIsFav(true) : setStateIsFav(false)
    }

    const toLoad = stateData.slice(0, load)
    
    const home = toLoad.map((item,index)=>{
        index +=1
        return <div className="recipeCard" key={index}>

            <img className="cardImg" src={item.image_url} alt="" />

            <h2>{item.title}</h2>
            
            <Link 
                onClick={()=>detailDisplay(item.id)}
                to={`/details/${item.id}`}
            >
                <button>Recipe Details</button>
            </Link>
        </div>
    })

    function loadMore(){
        window.scrollTo(0, document.documentElement.scrollHeight)
        if(stateData.length <= load){
            setLoad(stateData.length)
        }
        else{
            if(stateData.length > load){
                setLoad(prevLoad => prevLoad +=4)
            }
        }
    }

    return (
        <div className="home-wrap">
            <div className="cards-wrapper">
                {home}
            </div>
            <button 
                onClick={loadMore}
                className={stateData.length > load ? 'loadBtn animBtn' : 'loadBtn'}
                disabled={stateData.length <= load ? true : false}
            >
                {stateData.length < load ? 'Last Loaded' : 'Load More'}
            </button>
        </div>
    )
}