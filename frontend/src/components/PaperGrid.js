import PaperContainer from './../components/PaperContainer';

function PaperGrid(props) {
  if (props.resultsArray.length === 1){
    return (
      <div>
        <PaperContainer paperClass={props.paperClass} text={props.resultsArray}/>
      </div>
    );
  } else if (props.resultsArray.length > 1) {
    return (
    <div>
        {props.resultsArray.map(item => (
          <div>
          <PaperContainer paperClass={props.paperClass} text={item}/>
          <br/>
          </div>
        ))}
    </div>
    );
  }
  return("");
}
export default PaperGrid;