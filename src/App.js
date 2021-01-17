import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';

function CardDisplay() {
  const missions = ['First Steps', 'Family Familiarity', 'Animal Info', 'Animal Addition', 'Modern Major']
  const missionVals = []
  for (let id in missions) {
    const missionRef = firebase.database().ref(missions[id]);
    missionRef.on('value', (snapshot) => {
    missionVals.push(snapshot.val());
  })
  }


  return [
    "Primary",
    "Secondary",
    "Success",
    "Dark",
    "Info"
  ].map((variant, idx) => (
    <Card 
      bg={variant.toLowerCase()}
      key={idx}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem" }}
      className="mb-5"
    >
      
      <Card.Header>Mission {idx+1}</Card.Header>
      <Card.Body>
        <Card.Title>{missions[idx]} </Card.Title>
        <Card.Text> {missionVals[idx]} </Card.Text>
      </Card.Body>
    </Card>
  ));
}

export default function App() {
  return (
    <div className="cards">
      <CardDisplay />
    </div>
  );
}
