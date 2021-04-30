import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Reviews from './Review'




export default function ReviewList(props){
      const {reviews} = props;
      
      console.log(reviews)
    return(
      <div>
    {reviews
      && reviews.map((review) =>(
        <Reviews review={review}/>
    ))}
    </div>
    )
}