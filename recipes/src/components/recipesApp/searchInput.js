import { recipesContext } from "./recipes";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchInput(){
    let {searchControl, search} = useContext(recipesContext)
    const [stateControl, setStateControl] = searchControl
    const [stateSearch, setStateSearch] = search
    const goTo = useNavigate()

    function handleChange(event){
        let {value} = event.target
        setStateControl(value)
    }

    function handleSubmit(event){
        event.preventDefault()
        setStateSearch(stateControl)
        goTo('/')
    }

    const searchForm = <form onSubmit={handleSubmit}>
        <input type="text" value={stateControl} onChange={handleChange} />
        <button type="submit">Click To Search</button>
    </form>

    return (
        <div>
            {searchForm}
        </div>
    )
}