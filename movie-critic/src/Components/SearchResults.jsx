import React from 'react'

export default function SearchResults(props){
    const {results} = props
    return(
        <>
        {results && results.map((result)=>(
            <div key ={result.id}>
                <h1 >{result.title}</h1>
                <h2>Average Rating: {result.vote_average}</h2>
                <p>{result.overview}</p>
            </div>
        ))}
        </>
    )
}
