import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/Contador';


function App() {



  return (
    <div className="App">

      
      <div >
        <NavBar/>              
        <ItemListContainer greeting="Bienvenidos!"/>
        <Contador/>
      </div>
      

                 
    </div>
  );
}

export default App;
