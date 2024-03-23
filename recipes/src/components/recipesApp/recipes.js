import {Link, Routes, Route} from 'react-router-dom'
import { useState, createContext, useEffect } from "react";
import RecipesHome from "./home";
import RecipeFavs from "./favorites";
import Details from './details';
import './recipes.css'
import SearchInput from './searchInput';

export const recipesContext = createContext()

export default function RecipesApp(){
    const [data, setData] = useState([])
    const [detailsData, setDetailsData] = useState({})
    const [searchControl, setSearchControl] = useState('')
    const [search, setSearch] = useState('Banana')
    const [detailId, setDetailId] = useState(()=> localStorage.getItem('theID'))
    const [favorites, setFavorites] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    const [isFav, setIsFav] = useState(false)

    useEffect(()=>{
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=b1e3669d-400c-4529-a542-30a757f10366`)
        .then(res => res.json())
        .then(json => setData(json.data?.recipes))
    }, [search])

    useEffect(()=>{
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${detailId}?key=b1e3669d-400c-4529-a542-30a757f10366`)
        .then(res => res.json())
        .then(json => setDetailsData(json.data?.recipe))
        localStorage.setItem('theID', detailId)
    }, [detailId])

    return(
        <div>
            <nav>
                <ul>
                    <li><Link className='links' to='/'>Home</Link></li>
                    
                    <li> <Link className='links' to='/favorites'>Favorites</Link></li>
                </ul>
                <recipesContext.Provider value={{
                    search:[search, setSearch],
                    searchControl:[searchControl, setSearchControl]
                }}>
                    <SearchInput/>
                </recipesContext.Provider>
            </nav>
            <recipesContext.Provider value={{
                    data:[data, setData],
                    detailId:[detailId, setDetailId],
                    searchControl:[searchControl, setSearchControl],
                    search:[search, setSearch],
                    favorites: [favorites, setFavorites],
                    detailsData:[detailsData, setDetailsData],
                    showDetails:[showDetails, setShowDetails],
                    isFav:[isFav, setIsFav]
                }}
            > 
                <Routes>
                    <Route path="/" element={<RecipesHome/>}></Route>

                    <Route path="/favorites" element={favorites && <RecipeFavs/>}/>

                    <Route path='/details/*' element={detailsData && <Details/>}/>
                </Routes>

            </recipesContext.Provider>
        </div>
    )
}