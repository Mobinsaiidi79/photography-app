import Home from "./pages/Home/Home";
import Portfolios from "./pages/Portfolios/Portfolios";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
let routes = [
  { path: "/", element: <Home /> },
  { path: "/portfolios", element: <Portfolios /> },
  { path: "/services", element: <Services /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
