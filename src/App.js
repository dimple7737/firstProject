import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollEffects/ScrollToTp';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import TheLayout from './common/MainLayout/TheLayout';
import Home from './pages//Home/Home';
import AboutUs from './pages//AboutUs/AboutUs';
import './App.scss';



function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* PageNotFound */}
          <Route path="*" element={<PageNotFound />} />

          {/* Pages */}
          <Route path='/' element={<TheLayout />}>
            <Route path="/" element={<Home />} exact />
            <Route path="/about-us" element={<AboutUs />} exact />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
