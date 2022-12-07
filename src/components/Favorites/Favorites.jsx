// import Card from "../Card"
import { useDispatch } from "react-redux"
import { connect } from "react-redux"
import Card from "../Card"
import { orderCards, filterCards } from "../../Redux/actions/actions"

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
        {/* <Cards characters={myFavorites}/> */}
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
    // return myFavorites.map( pj => {
    //     return(<Card
    //         key={pj.id}
    //         name={pj.name}
    //         species={pj.species}
    //         gender={pj.gender}
    //         image={pj.image}
    //         id={pj.id}
    //       />)
    // })
}

function mapStateToProps(state) {
    return { myFavorites: state.myFavorites }
}

export default connect(mapStateToProps, null)(Favorites)