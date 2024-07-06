import './App.css';
import Test from'./components/Test';
import egresados from './data';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Celebres egresados de la Universidad Sideral Carrion</h1>
        {egresados.map((egresado, index) => (
          <Test 
            key={index}
            name={egresado.name}
            alt={egresado.alt}
            text={egresado.text}
            info={egresado.info}
            image={egresado.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
