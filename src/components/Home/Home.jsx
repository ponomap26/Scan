import React from 'react';
import {redirect} from "react-router-dom";

import {Label} from "../Label/Label";


function Home() {
    return (
        <>
            <redirect to="/login" />
            <Label/>

        </>


    )


}

export default Home;