import Card from './components/Card';
import data from './data';


function App() {
  const items = data;

  return (
    <div className="App">
      <header> </header>
      {items.map(item => <Card item={item} />)}
    </div>
  );
}

export default App;
