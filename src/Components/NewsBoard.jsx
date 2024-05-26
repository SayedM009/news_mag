/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import styles from "./NewsBoard.module.css"
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

// API KEY
const API_KEY = "752be418a99d4329a3701cbbaef31270";

function NewsBoard({state, dispatch}) {

    // Use state hooks to handle data, loading spinner and error messages
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [position, setPosition] = useState(false)
    const {news, country, category} = state;

    // Use Effect hook here fetchs the articale from a free API with a key
    useEffect(function() {
        // Run the loading Spinner 
        setLoading(true)

        // Fetchin Data
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`)
        .then(res => res.json())
        .then(data => dispatch({type:"add_news", payload:data.articles}))
        // Handling Errors
        .catch(err => {
            // Setting Error messages
            if(err.message === "Failed to fetch") {
                setError("Something went wrong check your internet connection ❌")
            } else {
                setError("Something went wrong reload the page !")
            }
        })

        // Stop the loading Spinner
        .finally(() => setLoading(false))
    },[category, country, dispatch])

    useEffect(function() {
        if(!position) return
        const user_position = function() {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject)
            })}
        user_position().then(res => {
            const {latitude : lat, longitude : long} = res.coords
            return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({type:"change_country", payload:data.countryCode})
        })
    }, [position, dispatch])


    
    
    return <section className={`${styles.newsBoard} p-5`}>
        {loading && <Spinner />}
        {error && <h2>{error}</h2>}
        <div className={`${styles.news} d-flex gap-2 justify-content-center`}>
            {news.map((_, i) => <NewsItem article={news[i]} key={i}/>)}
        </div>
        <div className={styles.location} title="Get you position" onClick={() => setPosition(true)}>&diams;</div>
    </section>
}

export default NewsBoard
