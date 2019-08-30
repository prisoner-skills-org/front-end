import { SET_ACCOUNT, SET_PRISON, SET_PRISONS, ADD_PRISON, SET_PRISONERS, UPDATE_PRISONER, DELETE_PRISONER, IS_LOADING_PRISONS, IS_LOADING_PRISONERS, IS_LOADING_ACCOUNT } from "../actions/prisonActions"

const initialState = {
    account: {},
    prisonData: null,
    prisoners: [],
    prisons: [],
    prisonersHashMap: {},
    isLoadingAccount: false,
    isLoadingPrisons: false,
    isLoadingPrisoners: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT:
                return { ...state, account: action.account, isLoadingAccount: false };
        case SET_PRISON: 
            return { ...state, prisonData: action.prison, isLoadingPrisons: false };
        case SET_PRISONERS:
            return { 
                ...state, 
                prisoners: action.prisoners, 
                prisonersHashMap: constructHashmap(action.prisoners), 
                isLoadingPrisoners: false 
            };
        case ADD_PRISON:
                return { ...state, prisons: [...state.prisons, action.payload ] };
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
        case IS_LOADING_ACCOUNT:
            return { ...state, isLoadingAccount: action.payload };
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