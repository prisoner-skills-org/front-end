
import axiosWithAuth from "../axiosWithAuth"

export const SET_ACCOUNT = "SET_ACCOUNT";

export const SET_PRISON = "SET_PRISON";
export const SET_PRISONS = "SET_PRISONS"
export const ADD_PRISON = "ADD_PRISON";

export const GET_PRISONERS = "GET_PRISONERS";
export const SET_PRISONERS = "SET_PRISONERS";
export const UPDATE_PRISONER = "UPDATE_PRISONER";
export const DELETE_PRISONER = "DELETE_PRISONER";

export const IS_LOADING_ACCOUNT = "IS_LOADING_ACCOUNT";
export const IS_LOADING_PRISONS = "IS_LOADING_PRISONS";
export const IS_LOADING_PRISONERS = "IS_LOADING_PRISONERS";

export const getAccountDetails = _ => dispatch => {
    dispatch({ type: IS_LOADING_ACCOUNT, payload: true });

    axiosWithAuth().get("https://prisoners-bw.herokuapp.com/api/users")
        .then(res => {
            let account = res.data.find(e => e.username === localStorage.getItem("username"));
            dispatch({ type: SET_ACCOUNT, account });
        })
}

export const setPrison = prisonInfo => dispatch => {

    dispatch({ type: SET_PRISON, prison: prisonInfo });
}

export const getPrisons = myID => dispatch => {
    dispatch({ type: IS_LOADING_PRISONS, payload: true });

    axiosWithAuth().get("https://prisoners-bw.herokuapp.com/api/prisons")
        .then(res => {
          
            let prison = res.data.find(e => e.user_id === myID);
            localStorage.setItem("prison", prison.id);
            dispatch({
                type: SET_PRISON,
                prison: prison
            });
        })
}

export const addPrison = details => dispatch => {
    axiosWithAuth().post("https://prisoners-bw.herokuapp.com/api/auth/prisons", details)
        .then(res => {
            dispatch({ type: ADD_PRISON, payload: details });
        })
}

export const getAllPrisons = _ => dispatch => {
    dispatch({ type: IS_LOADING_PRISONS, payload: true });

    axiosWithAuth().get("https://prisoners-bw.herokuapp.com/api/prisons")
        .then(res => {
            dispatch({ type: SET_PRISONS, prisons: res.data });
        })
}

export const getPrisoners = prisonID => dispatch => {
    dispatch({ type: IS_LOADING_PRISONERS, payload: true });

    axiosWithAuth().get("https://prisoners-bw.herokuapp.com/api/prisoners")
        .then(res => {
            let prisoners = res.data.filter(e => e.prison_id === prisonID);
            dispatch({ type: SET_PRISONERS, prisoners });
        })
}

export const updatePrisoner = (newData, addSkills, deleteSkills) => dispatch => {
    console.log(addSkills, deleteSkills);
    axiosWithAuth().put("https://prisoners-bw.herokuapp.com/api/auth/prisoners/" + newData.id, newData)
        .then(res => {
            if(addSkills.length !== 0) {
                Promise.all(addSkills.map(e => axiosWithAuth().post("https://prisoners-bw.herokuapp.com/api/auth/skills/", e))).then(data => {
                    
                })
            }
            if(deleteSkills.length !== 0) {
                Promise.all(deleteSkills.map(e => axiosWithAuth().delete("https://prisoners-bw.herokuapp.com/api/auth/skills/" + e.id))).then(data => {
                    
                })
            }
            dispatch({ type: UPDATE_PRISONER, prisoner: newData });
        })
}