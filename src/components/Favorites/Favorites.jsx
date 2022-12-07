// import Card from "../Card"
import { useDispatch } from "react-redux"
import { connect } from "react-redux"
import Card from "../Card/Card"
import { orderCards, filterCards } from "../../Redux/actions/actions"
import s from "../Favorites/Favorites.module.css"

function Favorites({ myFavorites }) {
    const dispatch = useDispatch()
    function handleOrder(e) {
        dispatch(orderCards(e.target.value))
    }
    function handleFilter(e) {
        dispatch(filterCards(e.target.value))
    }

    console.log(myFavorites)
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
    </div>
}

function mapStateToProps(state) {
    return { myFavorites: state.myFavorites }
}

export default connect(mapStateToProps, null)(Favorites)