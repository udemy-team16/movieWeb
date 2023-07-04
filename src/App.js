import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Search from 'pages/Search';
import Login from 'pages/Login';
import { useState } from 'react';
import useSearchMovies from 'hooks/useSearchMovies';
import { Provider } from 'react-redux';
import store from 'redux/store';


function App() {
  const [filterMovie, setFilterMovie] = useState([]);
  return (
    <BrowserRouter>
      <Provider
        store={store}>
        <Navigation filterMovie={filterMovie} setFilterMovie={setFilterMovie} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Detail />} />
          <Route path='/search' element={<Search filterMovie={filterMovie} />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
