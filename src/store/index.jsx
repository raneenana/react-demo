
import { createStore, combineReducers } from "redux";
import list from "./reducer/list"
import datalist from "./reducer/pay"
import movielist from "./reducer/cinema"

let reducer=combineReducers({
    list,
    datalist,
    movielist,
})
const store=createStore(reducer)
window.store=store 
export default store