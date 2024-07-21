import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Buttons from "./components/Buttons";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Buttons />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
