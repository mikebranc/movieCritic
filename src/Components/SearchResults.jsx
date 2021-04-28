import React, { useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import ButtonBase from '@material-ui/core/ButtonBase';
import '../Style.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchWriteReviewModal from './SearchWriteReviewModal';
import SearchDescriptionModal from './SearchDescriptionModal';
import {UserContext} from '../UserProvider';
import { firestore } from '../firebase/firebase.util';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  resultButton: {
    fontFamily: 'Raleway',
    textTransform: 'none',
    fontWeight: 'bold',
    backgroundColor: '#2A363B',
    color: '#FECEAB',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: '#1d2529',
    },
  },
  resultImageWrapper: {
    width: '175px',
    height: '175px',
    display: 'block',
  },
  searchResultPic: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    border: '1px solid #2A363B',
    borderRadius: '10px',
  },
}));

export default function SearchResults(props) {
  const classes = useStyles();
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showDescripModal, setShowDescripModal] = useState(false);
  const {results} = props;
  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext)
  console.log(user)

  function openReviewModal(e, idx) {
    setShowReviewModal(idx);
  }

  function hideReviewModal() {
    setShowReviewModal(false);
  }

  function openDescripModal(e, idx) {
    setShowDescripModal(idx);
  }

  function hideDescripModal() {
    setShowDescripModal(false);
  }
  function handleMovie(movieId){
    window.location.href = `/movie?id=${movieId}`
  }
  async function handleList(movieId){
    setLoading(true);
    try {
    //so what we'll probably have to do is get an array of existing movies from the db
    //then we'll add the new movie to that list and then after that upload the list to the db
    //see here https://stackoverflow.com/questions/46757614/how-to-update-an-array-of-objects-with-firestore 
    const postRef = firestore.collection('users').doc(user.uid);
    const data = await postRef.update({movies:firestore.FieldValue.arrayUnion(movieId)});
    console.log("added")
    console.log(data)
  } catch (error) {
    throw error.message;
  }
  setLoading(false);
  }


  return (
    <>
      {
      results &&
        results.map((result, idx) => (
          <div key={result.id} className={classes.root}>
            <Paper
              spacing={0}
              style={{
                backgroundColor: '#FECEAB',
                marginBottom: '15px',
                height: '210px',
                padding: '0px',
              }}
            >
              <Grid
                item
                lg
                xs={12}
                container
                spacing={0}
                style={{ height: '100%' }}
              >
                <Grid
                  item
                  xs={2}
                  style={{ height: '100%' }}
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                >
                  <div className={classes.resultImageWrapper}>
                    <img
                      alt='MovieImage'
                      className={classes.searchResultPic}
                      src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={7}
                  container
                  style={{
                    height: '100%',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                  }}
                >
                  <Grid item container direction='column'>
                    <Grid item xs>
                      <h1
                        style={{
                          marginTop: 0,
                          marginBottom: 10,
                          fontFamily: 'Raleway',
                        }}
                      >
                        {result.title}
                      </h1>
                    </Grid>
                    <Grid item xs container drection='row'>
                      <Grid item xs>
                        <div style={{ fontFamily: 'Raleway' }}>
                          Average Rating:
                        </div>
                      </Grid>
                      <Grid item xs>
                        <div style={{ fontFamily: 'Raleway' }}>
                          Friend Rating:
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item xs>
                      <div
                        style={{
                          fontFamily: 'Raleway',
                          height: '50px',
                          width: '700px',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {result.overview}
                      </div>
                    </Grid>
                    <Grid
                      style={{
                        fontFamily: 'Raleway',
                        fontWeight: 'bold',
                        marginTop: 10,
                      }}
                    >
                      Watched by: BradyMan18, MayaD, and 12 other friends
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3} container>
                  <Grid
                    style={{
                      padding: '20px',
                      backgroundColor: '#E84A5F',
                      borderRadius: '0px 3px 3px 0px',
                    }}
                    item
                    container
                    direction='column'
                    alignItems='stretch'
                    justify='space-between'
                  >
                    <Button className={classes.resultButton} onClick={(e) => handleList(result.id)}>
                      Add to List
                    </Button>

                    <Button
                      id={idx}
                      className={classes.resultButton}
                      onClick={(e) => openReviewModal(e, idx)}

                    >
                      Write Review
                    </Button>

                    <SearchWriteReviewModal
                      id={idx}
                      show={showReviewModal === idx}
                      handleClose={hideReviewModal}
                      movieId ={result.id.toString()}

                    />

                    <Button
                      id={idx}
                      className={classes.resultButton}
                      onClick={(e) => handleMovie(result.id)}
                    >
                      Full Description
                    </Button>

                    <SearchDescriptionModal
                      id={idx}
                      show={showDescripModal === idx}
                      handleClose={hideDescripModal}
                      movieSummary={result.overview}
                    />
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
  );
}
