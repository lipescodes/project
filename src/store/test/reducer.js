//reducer

import { CHANGEANYAD } from "./action"

const initialState = {
    test:"anyad",
    something:"megse",
    firststate: 'My first redux state'
    //here
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CHANGEANYAD: {
        return {...state,test:payload}
    } 

    default:
        return state
    }
}

