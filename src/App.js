import './App.css';
import Add from './Components/Add/Add';
import Substract from './Components/Substract/Substract';


function App() {
  return (
    <div className="App">
      <Add first='200' second='300'></Add>
      <Substract first='500' second='300'></Substract>
    </div>
  );
}

export default App;
