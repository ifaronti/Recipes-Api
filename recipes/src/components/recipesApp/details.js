import {recipesContext} from "./recipes"
import {useContext, useEffect} from "react"

export default function Details(){
    let {detailsData, favorites, data, isFav} = useContext(recipesContext)
    const [stateFav, setStateFav] = favorites
    const [stateData, setStateData] = data
    const [stateDetailsData, setStateDetailsData] = detailsData
    const [stateIsFav, setStateIsFav] = isFav
    
    const fullRecipe = stateDetailsData.ingredients?.map((item, index)=>{
        index +=1
       return ( 
        <div key={index}>
            <h4>Ingredient {index}: {item.quantity && item.quantity} {item.unit && item.unit} {item.description}</h4>
        </div>
       )
    })

    function addToFav(id){
        const cpData = [...stateData] 
        const fav = [...stateFav]
        cpData.map(item =>{
            if(item.id === id){
               return fav.includes(item) ? '' : fav.push(item)
            }
        })
        setStateFav(fav)
        setStateIsFav(true)
    }

    function removeFav(id){
        const fav = [...stateFav]
        fav.map((item, index)=> {
            if(item.id === id){
              return  fav.splice(index, 1)
            }
        })
        setStateFav(fav)
        setStateIsFav(false)
    }


    return(
        <div>
            <div className="details-wrapper">
                <img className="detailsImg" src={stateDetailsData.image_url} alt="" />
                <h1>
                    {stateDetailsData.title}
                </h1>

                <button 
                    onClick={()=> stateIsFav ? 
                    removeFav(stateDetailsData.id) 
                    : 
                    addToFav(stateDetailsData.id)}
                >
                        {stateIsFav ? 
                        'Remove from favorites' 
                        : 
                        'Add to favorites'}
                </button>

                <h2>Cooking Time: {stateDetailsData.cooking_time + 'mins'}</h2>

                <h3>Serving{stateDetailsData.servings > 1 ? 's' : ''}: {stateDetailsData.servings}</h3>
                {fullRecipe}
            </div>
        </div>
    )
}