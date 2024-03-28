import { useNavigate } from "react-router-dom";
import { changeSearch } from "../features/searchSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";


export default function SearchInput(){
    const [searchControl, setSearchControl] = useState('')
    const goTo = useNavigate()
    const dispatch = useDispatch()

    function handleChange(event){
        let {value} = event.target
        setSearchControl(value)
    }

    function handleSubmit(event){
        event.preventDefault()
        dispatch(changeSearch(searchControl))
        goTo('/')
    }

    const searchForm = <form onSubmit={handleSubmit}>
        <input type="text" value={searchControl} onChange={handleChange} placeholder="Enter recipe to search" />
        <button type="submit">Search</button>
    </form>

    return (
        <div>
            {searchForm}
        </div>
    )
}