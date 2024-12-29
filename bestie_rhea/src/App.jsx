import Abouts_Us from "./Components/About_Us/About_Us"
import Bestie from "./Components/Bestie/Bestie"
import Footer from "./Components/Footer/Footer"
import Homepage from "./Components/Homepage/Homepage"
import Navbar from "./Components/Navbar/Navbar"
import Products from "./Components/Products/Products"
import { useState } from "react";


function App() {
  const [showAbout, setShowAbout] = useState(false);
  function toggleAboutUs(){
    setShowAbout(!showAbout);
  }
  return (
    <>
      <Navbar toggleAboutUs={toggleAboutUs}/>
      <Homepage/>
      <Products/>
      <Bestie/>
      {showAbout && <Abouts_Us/>}
      <Footer/>
    </>
  )
}

export default App
