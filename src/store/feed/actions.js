import axios from "axios";
const API_URL = `http://localhost:4000`;


export function startLoading(data) {
    return (
        {type: "LOADING", payload: data}
         )
}

export function storeHomepages(data) {
    return {
        type: "STORE_PAGES", payload: data
    } 
}

export async function fetchHomepages(dispatch, getState) {
    dispatch(startLoading(true)) 
    const res = await axios.get(`${API_URL}/homepage`);
    const homepages = res.data
    dispatch(storeHomepages(homepages))
}