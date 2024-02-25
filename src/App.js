import './styles/App.css';
import Home from './component/home';
import Restaurants from './component/restaurants';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { resContext } from './contexts/restaurantContext';
import Addhotel from './component/Addhotel';
import { useState,useEffect } from 'react';

function App() {
  const [category,setCategory] = useState(localStorage.getItem('category') || []);
  useEffect(() => {
    localStorage.setItem('category', category);
  }, [category]);
  return (
    
    <main>
    <resContext.Provider value={{category,setCategory}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/restaurants' element={<Restaurants></Restaurants>}></Route>
      <Route path='/Addhotel' element={<Addhotel></Addhotel>}></Route>
    </Routes> 
    </BrowserRouter>
    </resContext.Provider>
</main>
  );
}

export default App;
