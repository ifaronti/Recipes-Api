import {useState} from "react";
import { updateID } from "../features/idSlice";
import {Link} from "react-router-dom";
import { changeIsFav } from "../features/isFavSlice";
import { useDispatch, useSelector } from "react-redux";

export default function RecipeFavs(){
    const [load, setLoad] = useState(4)
    const favorites = useSelector(state => state.favorites.value)
    const dispatch = useDispatch()

    
    function detailDisplay(id){
        dispatch(updateID(id))
        dispatch(changeIsFav(true))
    }

    function loadMore(){
        if(favorites.length <= load){
            return favorites.length
        }
        else{
            if(favorites.length > load){
                setLoad(prevLoad => prevLoad +=4)
            }
        }
    }

    const toLoad = favorites.slice(0, load)

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
                disabled={load >= favorites.length ? true: false}
                className={favorites.length > load ? 'loadBtn animBtn' : 'loadBtn'}
            >
                {favorites.length < load ? 'Last Loaded' : 'Load More'}
            </button>
        </div>
    )
}