import Card from "./components/Card.jsx";
import { data } from "./data.js";

function App() {
  return (
  <>
    <header>
      <h1>My Super Sentai</h1>
    </header>
    <div className="cards-view">
      <div className="cards-grid">
        {data.map((item) => <Card cardData={item}/> )}
      </div>
    </div>
  </>
  );
}

export default App;
