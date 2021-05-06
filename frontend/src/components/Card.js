import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function Card({ text }){
  return(
      <Paper style={{
        marginBottom: 16,
        maxWidth: 500,
        borderRadius: 8,
        padding: '48px 40px'
      }}>
        <Typography>
          {text}
        </Typography>
      </Paper>
  );
}

export default Card;