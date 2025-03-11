import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/component";
import "./App.css";
import Footer from "./components/Footer/component";
import Navbar from "./components/Navbar/component";
import NotFound from "./components/NotFound/component";
import UserDetails from "./pages/User";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

const Layouts = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layouts;
