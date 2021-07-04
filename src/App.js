import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Service from "./components/page/Service";
import Contact from "./components/page/Contact";
import Header from "./components/header/Header";
import Signin from "./components/signin/Signin";
import Register from "./components/register/Register";
import Rent from "./components/Rent/Rent";
import Edit from "./components/edit/edit";
import Cloud from "./components/cloud/cloud";
import Assesries1 from "./components/Assesries/asses1";
import Assesries2 from "./components/Assesries/asses2";
import Assesries3 from "./components/Assesries/asses3";
import Assesries4 from "./components/Assesries/asses4";
import Assesries5 from "./components/Assesries/asses5";
import Assesries6 from "./components/Assesries/asses6";
import Assesries7 from "./components/Assesries/asses7";
import Assesries8 from "./components/Assesries/asses8";
import Assesries9 from "./components/Assesries/asses9";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/asses1" element={<Assesries1 />} />
          <Route path="/asses2" element={<Assesries2 />} />
          <Route path="/asses3" element={<Assesries3 />} />
          <Route path="/asses4" element={<Assesries4 />} />
          <Route path="/asses5" element={<Assesries5 />} />
          <Route path="/asses6" element={<Assesries6 />} />
          <Route path="/asses7" element={<Assesries7 />} />
          <Route path="/asses8" element={<Assesries8 />} />
          <Route path="/asses9" element={<Assesries9 />} />
         
        </Routes>

        <Footer />
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </Router>
    </div>
  );
}

export default App;
