import React from 'react';
import Advice from './Advice';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const App = () => {
    return(
      <div >
         <BrowserRouter basename='/advice-app'>
                   <Routes>
                      <Route exact path='/' index element={ <Advice/>}/>
                   </Routes>
         </BrowserRouter>
      </div>
    )
}

export default App;
