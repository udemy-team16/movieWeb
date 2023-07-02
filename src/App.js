import Header from "components/Header";
import Home from "pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "../node_modules/react-router-dom/dist/index";
import MovieDetail from "./pages/MovieDetail";
import "style/global.css";
import Search from "pages/Search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movie/search/:movieName" element={<Search />} />
      </Routes>
    </Router>
  );
}
export default App;
