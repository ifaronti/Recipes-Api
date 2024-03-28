import { useState } from "react";
import {Link} from "react-router-dom";
import { updateID } from "../features/idSlice";
import { useSelector, useDispatch } from "react-redux";
import { changeIsFav } from "../features/isFavSlice";


export default function RecipesHome(){
    const [load, setLoad] = useState(4)
    const favorites = useSelector(state => state.favorites.value)
    const mainData = useSelector(state => state.data.value)
    const dispatch = useDispatch()

    function detailDisplay(id){
        dispatch(updateID(id))
        
        favorites.some(item => item.id === id) ? dispatch(changeIsFav(true)) : dispatch(changeIsFav(false))
    }

    const toLoad = mainData.slice(0, load)
    
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

        if(mainData.length <= load){
            setLoad(mainData.length)
        }
        else{
            if(mainData.length > load){
                setLoad(prevLoad => prevLoad +=4)
            }
        }
        window.scrollTo(0, document.documentElement.scrollHeight)
    }

    return (
        <div className="home-wrap">
            <div className="cards-wrapper">
                {home}
            </div>
            <button 
                onClick={loadMore}
                className={mainData.length > load ? 'loadBtn animBtn' : 'loadBtn'}
                disabled={mainData.length <= load ? true : false}
            >
                {mainData.length < load ? 'Last Loaded' : 'Load More'}
            </button>
        </div>
    )
}