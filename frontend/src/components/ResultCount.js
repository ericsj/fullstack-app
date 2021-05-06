import Typography from '@material-ui/core/Typography';

function ResultCount({ resultsLength }) {
  return(
    <Typography style={{ fontSize: 'small' }}>
      Showing {resultsLength} result{resultsLength > 1 ? 's' : ''}
    </Typography>              
  );
}

export default ResultCount;