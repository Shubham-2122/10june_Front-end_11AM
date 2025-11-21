import React from "react";
// import Css from "./css/Css";
// import MainProps from "./Props/MainProps";
import MainState from "./State/MainState";
import FormData from "./form/FormData";
import Formobj from "./form/Formobj";
import UseData from "./UseEffect/UseData";
import UserTable from "./UseEffect/UserTable";
import UserTable1 from "./UseEffect/UserTable1";
import UserCard from "./UseEffect/UserCard";
import MainContext from "./Context/MainContext";
import BootStra from "./Boot/BootStra";
import React_card from "./Boot/React_card";
import Footers from "./Boot/Footers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/pages/Home";
import About from "./layout/pages/About";
import Contact from "./layout/pages/Contact";
import About1 from "./layout/pages/About1";
import About2 from "./layout/pages/About2";
import Not from "./layout/pages/Not";
import Ref from "./Hooks/Ref";
import HokMange from "./Hooks/HokMange";

// import Hello from "./Jsx/Hello";
// import ClassCompo from "./Component/ClassCompo";
// import FunCompo from "./Component/FunCompo";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>Hell this App</h1> */}

        {/* component */}
        {/* <ClassCompo /> */}
        {/* <FunCompo /> */}

        {/* jsx file */}
        {/* <Hello /> */}

        {/* css */}
        {/* <Css /> */}

        {/* props */}
        {/* <MainProps /> */}

        {/* State */}
        {/* <MainState /> */}

        {/* form_hadling  */}
        {/* <FormData /> */}
        {/* <Formobj /> */}

        {/* useEffect */}
        {/* <UseData /> */}
        {/* <UserTable /> */}
        {/* <UserTable1 /> */}
        {/* <UserCard /> */}

        {/* context */}
        {/* <MainContext /> */}

        {/* bott frameword  */}
        {/* <BootStra />
      <React_card />
      <Footers /> */}

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
            <Route path="about1" element={<About1 />} />
            <Route path="about2" element={<About2 />} />
          </Route>
           <Route path="/contact" element={<Contact />} />
            <Route path="/ref" element={<Ref />} />
               <Route path="/red" element={<HokMange />} />
        
          {/* not found */}
          <Route path="*" element={<Not />} />

      </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;