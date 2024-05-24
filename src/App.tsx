
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home'
import Blogs from './Screens/Blogs'
import Contact from "./Screens/Contact";
import Services from "./Screens/Services";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="services" element={<Services />} />
          v      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
