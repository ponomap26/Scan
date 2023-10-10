import React from "react";


import {Routes, Route} from "react-router-dom";

import Home from "../Home/Home.jsx";
import Auth from "../Auth/Auth.jsx";


function  App(){
        return(
            <>
               <Routes>

                    <Route path="/" element={<Home />}/>
                    <Route path="/auth" element={<Auth />}/>
              </Routes>


            </>
        )
}

export default App;