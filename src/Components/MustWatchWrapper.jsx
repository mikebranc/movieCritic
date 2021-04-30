import React from 'React'
import MustWatch from '../components/MustWatch'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function MustWatchWrapper(){
    <Paper
        spacing={3}
        style={{
        backgroundColor: 'white',
        height: '400px',
        width: '320px',
        padding: '0px',
        borderRadius: '10px',
        overflow: 'hidden',
        }}>
          {/* <Grid className={classes.title}>
            <Grid item xs>
                Must Watch
            </Grid> */}
            <MustWatch/>
        {/* </Grid>
        <Grid className={classes.block} container direction='row'>
        </Grid> */}
        </Paper>
}