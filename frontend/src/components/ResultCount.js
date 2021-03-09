import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function ResultCount(props) {
  return(
    <Grid item xs={10} md={10}>
    <Typography style={{fontSize: 'small'}}>
      Showing {props.resultsArray.length} result(s)
    </Typography>              
  </Grid>  
  );
}

export default ResultCount;