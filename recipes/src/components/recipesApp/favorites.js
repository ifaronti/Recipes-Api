import {useContext, useState} from "react";
import {recipesContext} from "./recipes";
import {Link} from "react-router-dom";

export default function RecipeFavs(){
    const {favorites, detailId, showDetails, isFav} = useContext(recipesContext)
    const [stateFav, setStatefav] = favorites
    const [stateId, setStateId] = detailId
    const [stateShow, setStateShow] = showDetails
    const [stateIsFav, setStateIsFav] = isFav
    const [load, setLoad] = useState(4)
    
    function detailDisplay(id){
        setStateId(id)
        setStateShow(true)
        setStateIsFav(true)
    }

    function loadMore(){
        if(stateFav.length <= load){
            return stateFav.length
        }
        else{
            if(stateFav.length > load){
                setLoad(prevLoad => prevLoad +=4)
            }
        }
    }

    const toLoad = stateFav.slice(0, load)

    const favs = toLoad.map((item,index)=>{
        index +=1
        return( 
            <div className="recipeCard" key={index}>

                <img className="cardImg" src={item.image_url} alt="" />

                <h2>{item.title}</h2>

                <Link 
                    onClick={()=>detailDisplay(item.id)}
                    to={`/details/${item.id}`}
                >
                    <button>Recipe Details</button>
                </Link>
            </div>
        )
    })

    return(
        <div className="favs-wrapper, home-wrap">
            <div className="cards-wrapper favCards">{favs}</div>
            <button 
                onClick={loadMore}
                disabled={load >= stateFav.length ? true: false}
                className={stateFav.length > load ? 'loadBtn animBtn' : 'loadBtn'}
            >
                {stateFav.length < load ? 'Last Loaded' : 'Load More'}
            </button>
        </div>
    )
}