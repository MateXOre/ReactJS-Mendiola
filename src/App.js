// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './styles.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



function App() {
  

  return (
    <div className="App">
      <NavBar/>  
      <ItemListContainer/>
      <ItemCount/>
    </div>
  );
}

export default App;
