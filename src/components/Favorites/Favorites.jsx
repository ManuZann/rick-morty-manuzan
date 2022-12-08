// import Card from "../Card"
import Card from "../Card/Card"
import { orderCards, filterCards } from "../../Redux/actions/actions"
import s from "../Favorites/Favorites.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Favorites() {
    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch()

    function handleOrder(e) {
        dispatch(orderCards(e.target.value))
    }
    function handleFilter(e) {
        dispatch(filterCards(e.target.value))
    }
    
    return <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className={s.Favs}>
                {myFavorites.map(pj => (
                    <Card
                        key={pj.id}
                        name={pj.name}
                        species={pj.species}
                        gender={pj.gender}
                        image={pj.image}
                        id={pj.id}
                        onClose={() => pj.onClose(pj.id)}
                    />
                ))}
            </div>
            <Link to="/home"><button className={s.volver}>Volver</button></Link>
    </div>
}
