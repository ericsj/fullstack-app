import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react'

class PaperContainer extends Component {
  render(){
  return(
    <Grid item xs={10} md={12}>
      <Paper className={this.props.paperClass}>
        <Typography>
          {this.props.text}
        </Typography>
      </Paper>
    </Grid>
  );
}
}

export default PaperContainer;
