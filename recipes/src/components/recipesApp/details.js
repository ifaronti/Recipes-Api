import { addFav,deleteFav  } from "../features/favoritesSlice"
import { useDispatch, useSelector } from "react-redux"
import { changeIsFav } from "../features/isFavSlice"

export default function Details(){
    const detailsData = useSelector((state) => state.detailsData?.value)
    const isFav = useSelector(state => state.isFav.value)
    const data = useSelector(state => state.data.value)
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.value)

    const fullRecipe = detailsData.ingredients?.map((item, index)=>{
        index +=1
       return ( 
        <div key={index}>
            <h4>Ingredient {index}: {item.quantity && item.quantity} {item.unit && item.unit} {item.description}</h4>
        </div>
       )
    })

    function addToFav(id){
        data.map(item =>{
            if(item.id === id){
               return favorites.some(item=> item.id ===id) ? '' : dispatch(addFav(item))
            }
        })
        dispatch(changeIsFav(true))
    }

    function removeFav(id){
        favorites.map(item => {
          if(item.id === id){
            dispatch(deleteFav(item))
            dispatch(changeIsFav(false))
          }
        })
    }

    return(
        <div>
            <div className="details-wrapper">
                <img className="detailsImg" src={detailsData.image_url} alt="" />

                <h1>{detailsData.title}</h1>

                <button 
                    onClick={()=>isFav ? removeFav(detailsData.id) : addToFav(detailsData.id)}
                >
                        {isFav ? 
                        'Remove from favorites' 
                        : 
                        'Add to favorites'}
                </button>

                <h2>Cooking Time: {detailsData.cooking_time + 'mins'}</h2>

                <h3>Serving{detailsData.servings > 1 ? 's' : ''}: {detailsData.servings}</h3>
                {fullRecipe}
            </div>
        </div>
    )
}