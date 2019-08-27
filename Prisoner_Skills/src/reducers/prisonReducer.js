import { SET_PRISON, SET_PRISONERS, UPDATE_PRISONER, DELETE_PRISONER, IS_LOADING } from "../actions/prisonActions"

const initialState = {
    prisonData: {},
    prisoners: [],
    prisonersHashMap: {},
    isLoading: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRISON: 
            return { ...state, prisonData: action.prison };
        case SET_PRISONERS:
            return { 
                ...state, 
                prisoners: action.prisoners, 
                prisonersHashMap: constructHashmap(action.prisoners), 
                isLoading: false 
            };
        case UPDATE_PRISONER:
            let newPrisonList = updatePrisoner(state.prisoners, action.prisoner);
            return { 
                ...state, 
                prisoners: newPrisonList, 
                prisonersHashMap: constructHashmap(newPrisonList)
            };
        case DELETE_PRISONER:
            return { ...state, prison: action.payload };
        case IS_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

function constructHashmap(prisonersArr) {
    let hashmap = {};

    for(let p of prisonersArr) {
        hashmap[p.id] = p;
    }

    return hashmap;
}

function updatePrisoner(prisonersArr, prisoner) {
    return prisonersArr.map(p => p.id === prisoner.id ? prisoner : p);
}