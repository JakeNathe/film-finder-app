import './App.css';
import Header from "./components/Header";
import SimpleBottomNavigation from './components/Navigation';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from "react-bootstrap";
import Movies from "./pages/Movies";
import Popular from "./pages/Popular";
import Series from "./pages/Series";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="app">
        <Container>
          <Routes>
            <Route path ="/" element={<Popular/>} exact/>
            <Route path ="/movies" element={<Movies/>}/>
            <Route path ="/series" element={<Series/>}/>
            <Route path ="/search" element={<Search/>}/>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
};

export default App;
