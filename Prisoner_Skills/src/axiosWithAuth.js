import axios from "axios";

export default _ => axios.create({ headers: { 
    'Authorization': localStorage.getItem("token") 
}});