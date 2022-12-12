import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';



function App() {



  return (
    <BrowserRouter>
    <div className='App'>    
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:idCategory' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />        
      </Routes>        
    </div>
    </BrowserRouter>

  )
}

export default App;
