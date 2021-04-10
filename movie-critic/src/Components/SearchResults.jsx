import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import '../Style.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    resultButton:{
        backgroundColor: '#2A363B',
        color: '#FECEAB',
        fontSize: '20px'
    },
    resultImageWrapper: {
        width: '175px',
        height: '175px',
        display: 'block',

    },
    searchResultPic: {
        width:'100%',
        height:'100%',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
        border: '1px solid #2A363B',
        borderRadius: '10px'
    }
  }));



export default function SearchResults(props){
    const classes = useStyles();
    const {results} = props
    return(
        <>
        {results && results.map((result)=>(
            <div key ={result.id} className={classes.root}>
                <Paper spacing = {0} style={{backgroundColor: '#FECEAB', marginBottom: '15px', height: '200px', padding: '0px'}} >
                    <Grid item lg xs={12} container spacing ={2} style={{height: '100%'}}>
                        <Grid item xs={2} style ={{height:'100%'}} container direction="column" justify = 'center' alignItems = 'center'>
                            <div className={classes.resultImageWrapper}>
                                <img alt="MovieImage" className = {classes.searchResultPic} src = {`https://image.tmdb.org/t/p/w500${result.poster_path}`}/>
                            </div>                           
                        </Grid>
                        <Grid item xs={7} container style={{height: '100%'}}>
                            <Grid item  container direction="column" > 
                                <Grid item xs>
                                    <h1 style={{marginTop:0, marginBottom:10}}>{result.title}</h1>
                                </Grid>
                                    <Grid item xs container drection="row">
                                        <Grid item xs>
                                            Average Rating: 
                                        </Grid>
                                        <Grid item xs>
                                            Friend Rating: 
                                        </Grid>
                                    </Grid>
                                <Grid item xs>
                                    {result.overview}
                                </Grid>
                                <Grid style={{fontWeight: 'bold', marginTop:10}}>
                                    Watched by: BradyMan18, MayaD, and 12 other friends
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} container>
                            <Grid style={{padding: '20px', backgroundColor: '#E84A5F'}} item container direction="column" alignItems="stretch" justify="space-between" > 
                                <Button className={classes.resultButton}>Add to List</Button>
                                <Button className={classes.resultButton}>Write Review</Button>
                                <Button className={classes.resultButton}>Full Description</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                {/* <h1 >{result.title}</h1>
                <h2>Average Rating: {result.vote_average}</h2>
                <p>{result.overview}</p> */}
            </div>
        ))}
        </>
    )
}

