import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function PaperContainer(props){
  return(
    <Grid item xs={10} md={12}>
      <Paper className={props.paperClass}>
        <Typography>
          {props.text}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default PaperContainer;