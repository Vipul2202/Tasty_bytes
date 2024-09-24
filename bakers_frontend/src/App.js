
import './App.css';
import Master from './Layout/Master';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Error from './Pages/Error';
import About from './Pages/About';
// import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Team from './Pages/Team';
import Testimonial from './Pages/Testimonial';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/service' element={<Service/>} /> */}
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/Team' element={<Team/>} />
        <Route path='/Testmonial' element={<Testimonial/>} />
        <Route path="/single-product/:_id" element={<SingleProduct/>} />
         <Route path="*" element={<Error />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
