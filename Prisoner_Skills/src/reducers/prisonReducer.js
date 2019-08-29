import { SET_PRISON, SET_PRISONS, SET_PRISONERS, UPDATE_PRISONER, DELETE_PRISONER, IS_LOADING_PRISONS, IS_LOADING_PRISONERS } from "../actions/prisonActions"

const initialState = {
    prisonData: {},
    prisoners: [],
    prisons: [],
    prisonersHashMap: {},
    isLoadingPrisons: false,
    isLoadingPrisoners: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRISON: 
            return { ...state, prisonData: action.prison, isLoadingPrisons: false };
        case SET_PRISONERS:
            return { 
                ...state, 
                prisoners: action.prisoners, 
                prisonersHashMap: constructHashmap(action.prisoners), 
                isLoadingPrisoners: false 
            };
        case SET_PRISONS:
                return { ...state, prisons: action.prisons, isLoadingPrisons: false };
        case UPDATE_PRISONER:
            let newPrisonList = updatePrisoner(state.prisoners, action.prisoner);
            return { 
                ...state, 
                prisoners: newPrisonList, 
                prisonersHashMap: constructHashmap(newPrisonList)
            };
        case DELETE_PRISONER:
            return { ...state, prison: action.payload };
        case IS_LOADING_PRISONS:
            return { ...state, isLoadingPrisons: action.payload };
        case IS_LOADING_PRISONERS:
                return { ...state, isLoadingPrisoners: action.payload };
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