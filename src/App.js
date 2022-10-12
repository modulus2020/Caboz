import "./App.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/aos.css";
import "./assets/css/offcanvas.css";
import "./assets/fonts/fontawesome-free-6.1.1-web/css/all.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Market from "./pages/Market";
import Activity from "./pages/Activity";
import Myorders from "./pages/Myorders";
import Orderone from "./pages/Orderone";
import Ordertwo from "./pages/Ordertwo";
import Orderthree from "./pages/Orderthree";
import Ordersuccess from "./pages/Ordersuccess";
import Multistep from "./pages/Multistep";
import Project from "./pages/Project";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/market" element={<Market/>} />
          <Route path="/activity" element={<Activity/>} />
          <Route path="/my-orders" element={<Myorders/>} />
          <Route path="*" element={<Home/>} />
          <Route path="/order-step1" element={<Orderone/>} />
          <Route path="/order-step2" element={<Ordertwo/>} />
          <Route path="/order-step3" element={<Orderthree/>} />
          <Route path="/ordersuccess" element={<Ordersuccess/>} />
          <Route path="/multistepform" element={<Multistep/>} />
          <Route path="/project" element={<Project/>} />
        </Routes>
    </div>
    // </div>
  );
}

export default App;
