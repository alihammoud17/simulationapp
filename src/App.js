import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
