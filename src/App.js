import Home from './home';
import './App.css';
import './singlepage';
import {Routes,Route, useParams } from 'react-router-dom';
import Singlepage from './singlepage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/singlepage/:id" element={<Singlepage/>}></Route>
        <Route path='*' element={<div>error 404 </div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
