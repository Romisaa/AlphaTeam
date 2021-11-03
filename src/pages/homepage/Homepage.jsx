import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import About from "../../components/about/about";

import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <About/>
      <Header />
      
      <div className="home">
      
        
      </div>
    </>
  );
}