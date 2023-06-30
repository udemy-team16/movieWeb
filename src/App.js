import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Search from 'pages/Search';
import Login from 'pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Detail />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
