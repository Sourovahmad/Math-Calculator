
import './App.css';
import Data from './Data/HomepageContent';

 
function App() {

 

  return (
    <div> 
   
     {console.log(Data.map(content => (
       <div className="mydata">
         {content}
       </div>
     )
      
      
      
      ))}
         
      
    </div>
  );
}

export default App;
