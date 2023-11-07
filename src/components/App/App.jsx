import React from "react";


import {Routes, Route} from "react-router-dom";

import Home from "../Home/Home.jsx";
import LoginPage from "../Auth/LoginPage.jsx";
import Layout from "../Layout/Layout";


function  App(){
        return(
            <>
               <Routes>
                   <Route path="/" element ={<Layout/>}>
                        <Route path="/" element={<Home />}/>
                        <Route path="/login" element={<LoginPage />}/>
                   </Route>
              </Routes>


            </>
        )
}

export default App;