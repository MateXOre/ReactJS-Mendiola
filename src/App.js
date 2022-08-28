// import logo from './logo.svg';
import './App.css';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import './styles.css';
import ItemListContainer from './components/ItemListContainer';

function App() {


  return (
    <div className="App">
      <NavBar/>  
      <ItemListContainer/>

    </div>
  );
}

export default App;
