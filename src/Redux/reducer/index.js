import { ADDPJ, DELETEPJ, FILTER, ORDER } from "../actions/actions"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case ADDPJ:
            const favAñadido = [...state.allCharacters, payload]
            return{...state, myFavorites: favAñadido, allCharacters: favAñadido}

        case DELETEPJ:
            const favSacado = state.allCharacters.filter(pj => pj.id !== payload)
            return{...state, myFavorites: favSacado, allCharacters: favSacado}

        case FILTER:
            let filtrados = state.allCharacters
            if(payload !== "All"){
                filtrados = state.allCharacters.filter(pj => pj.gender === payload)
            }
            return{...state, myFavorites: filtrados}

        case ORDER:
            const ordenados = payload === "Ascendente" ?
                [...state.myFavorites.sort((a, b) => {
                    if(a.name < b.name) return -1
                    if(a.name > b.name) return 1
                    return 0})]
                    :
                [...state.myFavorites.sort((a, b) => {
                    if(a.name < b.name) return 1
                    if(a.name > b.name) return -1
                    return 0})]
            return{...state, myFavorites: ordenados}
        default:
            return state
    }
}


export default rootReducer