
import axiosWithAuth from "../axiosWithAuth"

export const SET_PRISON = "SET_PRISON";

export const GET_PRISONERS = "GET_PRISONERS";
export const SET_PRISONERS = "SET_PRISONERS";
export const UPDATE_PRISONER = "UPDATE_PRISONER";
export const DELETE_PRISONER = "DELETE_PRISONER";

export const IS_LOADING = "IS_LOADING";

export const setPrison = prisonInfo => dispatch => {
    dispatch({ type: SET_PRISON, prison: prisonInfo });
}

export const getPrisoners = prisonID => dispatch => {
    dispatch({ type: IS_LOADING, payload: true });

    /*axiosWithAuth().get(`${window.serverURL}/prison/${prisonName}/prisoners`)
        .then(res => {
            dispatch({ type: SET_PRISONERS, prisoners: res.data });
        })*/
    axiosWithAuth().get("https://my.api.mockaroo.com/prisoners.json?key=8c104da0", {
        params: {}
    })
        .then(response => {
            dispatch({ type: SET_PRISONERS, prisoners: response.data })
        });
}