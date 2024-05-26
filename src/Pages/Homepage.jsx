/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useReducer } from "react"
import Navbar from "../Components/Navbar"
import NewsBoard from "../Components/NewsBoard"
import CopyRights from "../Components/CopyRights"

const initialValue = {
    news: [],
    country: "us",
    category : "general"
}

function reducer(state, action) {
    switch (action.type) {
        case 'add_news':
            return {...state, news: action.payload};
        case 'change_country':
            return {...state, country: action.payload}
        case 'change_category' :
            return {...state, category : action.payload}
    }
}

function Homepage() {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return <>
    <Navbar state={state} dispatch={dispatch}/>
    <NewsBoard state={state} dispatch={dispatch}/>
    <CopyRights />
    </>
}

export default Homepage
