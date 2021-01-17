import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardDisplay() {
  return [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
  ].map((variant, idx) => (
    <Card 
      bg={variant.toLowerCase()}
      key={idx}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem" }}
      className="mb-2"
    >
      
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>{variant} Card Title </Card.Title>
        <Card.Text>
          Card Text
        </Card.Text>
      </Card.Body>
    </Card>
  ));
}
function App() {
  return (
    <div className="cards">
      <CardDisplay />
    </div>
  );
}

export default App;
