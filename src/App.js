import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Details from './Details';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/Details/:productName' element={<Details/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
