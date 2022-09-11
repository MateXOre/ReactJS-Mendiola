// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './styles.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import  ItemDetailContainer  from './components/ItemDetailContainer';



function App() {
  

  return (
    <div className="App">
        {<BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/ItemDetail' element={<ItemDetail/>}/>
            <Route path='/detail' element={<ItemDetailContainer/>}/>

          </Routes>
         </BrowserRouter>}
      
</div>
  );
}

export default App;
