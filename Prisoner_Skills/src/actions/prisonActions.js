
import axiosWithAuth from "../axiosWithAuth"

export const SET_PRISON = "SET_PRISON";

export const GET_PRISONERS = "GET_PRISONERS";
export const SET_PRISONERS = "SET_PRISONERS";
export const UPDATE_PRISONER = "UPDATE_PRISONER";
export const DELETE_PRISONER = "DELETE_PRISONER";

export const IS_LOADING_PRISONS = "IS_LOADING_PRISONS";
export const IS_LOADING_PRISONERS = "IS_LOADING_PRISONERS";

export const setPrison = prisonInfo => dispatch => {
    dispatch({ type: SET_PRISON, prison: prisonInfo });
}

export const getPrisons = myID => dispatch => {
    dispatch({ type: IS_LOADING_PRISONS, payload: true });

    setTimeout(_ => {
        dispatch({
            type: SET_PRISON,
            prison: prisons.filter(e => e.admin_id === myID)[0]
        })
    }, 2500);
}

export const getPrisoners = prisonID => dispatch => {
    dispatch({ type: IS_LOADING_PRISONERS, payload: true });

    setTimeout(_ => dispatch({ type: SET_PRISONERS, prisoners: data }), 2500);
    /*axiosWithAuth().get(`${window.serverURL}/prison/${prisonName}/prisoners`)
        .then(res => {
            dispatch({ type: SET_PRISONERS, prisoners: res.data });
        })*/
    /*axiosWithAuth().get("https://my.api.mockaroo.com/prisoners.json?key=8c104da0", {
        params: {}
    })
        .then(response => {
            dispatch({ type: SET_PRISONERS, prisoners: response.data })
        });*/
}

export const updatePrisoner = newData => dispatch => {
    setTimeout(_ => dispatch({ type: UPDATE_PRISONER, prisoner: newData }));
}

const prisons = [
    { name: "County", address: "Tumbleweed", admin_id: 1 },
    { name: "CountryJail", address: "Tumbler", admin_id: 2 },
    { name: "Casd", address: "Tumble", admin_id: 3 },
]

const data = [{"id":1,"first_name":"Serena","last_name":"Hudless","cleared":false,"gender":"Female"},{"id":2,"first_name":"Merv","last_name":"Ardron","cleared":true,"gender":"Male"},{"id":3,"first_name":"Any","last_name":"Mockett","cleared":true,"gender":"Male"},{"id":4,"first_name":"Marcela","last_name":"McQuirk","cleared":true,"gender":"Female"},{"id":5,"first_name":"Duffy","last_name":"Lyosik","cleared":false,"gender":"Male"},{"id":6,"first_name":"Hube","last_name":"Norway","cleared":false,"gender":"Male"},{"id":7,"first_name":"Richardo","last_name":"Phython","cleared":true,"gender":"Male"},{"id":8,"first_name":"Sharia","last_name":"Acres","cleared":true,"gender":"Female"},{"id":9,"first_name":"Brade","last_name":"Longridge","cleared":true,"gender":"Male"},{"id":10,"first_name":"Dilly","last_name":"Fookes","cleared":false,"gender":"Male"}];