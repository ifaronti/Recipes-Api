import SearchInput from "./searchInput";
import { Link } from "react-router-dom";

export default function Nav(){
 return(
        <nav>
            <h1 className="logo"><i>Ifarontimi</i></h1>
            <ul>
                <li><Link className='links' to='/'>Home</Link></li>
                
                <li> <Link className='links' to='/favorites'>Favorites</Link></li>
            </ul>
            <SearchInput/>
        </nav>
 )
}