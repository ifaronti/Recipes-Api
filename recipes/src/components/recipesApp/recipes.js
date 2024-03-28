import {Routes, Route} from 'react-router-dom'
import { useEffect} from "react";
import RecipesHome from "./home";
import RecipeFavs from "./favorites";
import Details from './details';
import './recipes.css'
import Nav from './nav';
import { useSelector, useDispatch } from 'react-redux';
import {loadData} from '../features/dataSlice'
import {updateDetailsData} from '../features/detailsDataSlice'

export default function RecipesApp(){
    const search = useSelector(state => state.search.value)
    const detailId = useSelector(state => state.id?.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=b1e3669d-400c-4529-a542-30a757f10366`)
        .then(res => res.json())
        .then(json => dispatch(loadData(json.data?.recipes)))
    }, [search, dispatch])

    useEffect(()=>{
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${detailId}?key=b1e3669d-400c-4529-a542-30a757f10366`)
        .then(res => res.json())
        .then(json => dispatch(updateDetailsData(json.data?.recipe)))       
    }, [detailId, dispatch])
    
    return(
        <div>
            <Nav/>
         
            <Routes>
                <Route path="/" element={<RecipesHome/>}></Route>

                <Route path="/favorites" element={<RecipeFavs/>}/>

                <Route path='/details/*' element={<Details/>}/>
            </Routes>

        </div>
    )
}