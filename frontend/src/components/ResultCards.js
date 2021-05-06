import Card from './Card';

function ResultCards({ resultsArray }) {
  return (
    <div>
        {resultsArray.map((item, i) => (
          <div key={i}>
            <Card text={item}/>
          </div>
        ))}
    </div>
  );
}
export default ResultCards;