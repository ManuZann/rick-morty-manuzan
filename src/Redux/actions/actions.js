export const ADDPJ = "ADDPJ"
export const DELETEPJ = "DELETEPJ"
export const FILTER= "FILTER"
export const ORDER= "ORDER"

export function AddPj(pj){
    return{type: ADDPJ, payload: pj}
}

export function DeletePj(id){
    return{type: DELETEPJ, payload: id}
}

export function filterCards(status){
    return{type: FILTER, payload: status}
}

export function orderCards(id){
    return{type: ORDER, payload: id}
}