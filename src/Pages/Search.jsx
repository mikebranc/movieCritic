import React, {useEffect, useState} from 'react'
import Searchbar from '../Components/Searchbar'
import SearchResults from '../Components/SearchResults'
import '../Style.css'
import { useLocation} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Navbar from '../Components/Navbar'




export default function Search(){
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    let location = useLocation();
    const query = new URLSearchParams(location.search).get('query')

    useEffect(()=>{
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=436a07c5838058f745a532d6f8cbc1d6&query=${query}`)
        .then(response => response.json())
        .then((data)=>{
            setResults(data.results)
            setLoading(false)
        })
    }, [setLoading, setResults])

    if(!query){
        return(
            <div style={{backgroundColor:'#2A363B'}}>
                <div className= 'searchWrapper'>
                    <Searchbar/>
                </div>


            </div>
        )
    }

    return(
        <div style={{backgroundColor:'#2A363B'}}>
            <div className= 'searchWrapper'>
                <Searchbar/>
                <div style={{paddingTop: '30px'}}>
                    <SearchResults results ={results} />
                </div>
            </div>


        </div>
    )
}