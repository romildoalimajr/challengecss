import logo from './logo.svg';
import './App.css';
import Car from './components/Car';

function App() {
  const myCars = [
    { name: 'Fusca', km: 10000, color: 'Branca'},
    { name: 'Polo', km: 32000, color: 'Cinza'},
    { name: 'Onix', km: 0, color: 'Preto'},
  ];
  return (
    <div className="App">
      <h1> Show Room of Cars</h1>
      <div className="car_container">
        {myCars.map((car) => (
          <Car car={car}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
