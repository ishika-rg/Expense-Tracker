import './App.css';


import {BrowserRouter as Router} from "react-router-dom" 
import {Routes , Route } from "react-router-dom"; 


import Home from './pages/home/Home'
import Header from './components/Head/Header'
import Topfold from './components/topfold/Topfold';
import Add_expense from './pages/add_expense/Add_expense';



function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>

        <Route path ="/" exact element= {<Home />}/> 
        <Route path ="/add_expense"  element= {<Add_expense />}/> 

      </Routes>
      
      <div> Footer </div>
    </div>

    </Router>
    
  );
}

export default App;
