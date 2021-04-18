import React from 'react'
import ReviewList from '../Components/ReviewList'
import Paper from '@material-ui/core/Paper';

export default function Movie(){
    return(
        <>
        <Paper spacing={0} style={{backgroundColor: '#FECEAB', marginLeft: '50px',marginRight: '50px', marginTop: '100px',height: '210px',padding: '20px', height: '80vh'}}>
            <ReviewList/>
        </Paper>
        </>
    )

}