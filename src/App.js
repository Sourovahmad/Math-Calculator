
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routers from './Routers/myRouters';

 
function App() {
  return (
    <div>
       <BrowserRouter>   
               <Routers/>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
