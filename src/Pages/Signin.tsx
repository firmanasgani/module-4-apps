import { useState } from "react"
import Footer from "../components/Footer/Index"
import Header from "../components/Header/Index"
import {local } from "../components/Utils/localStorage"

const getLocal = () => {
    return local
}


const Signin = () => {
    console.log("Local:" +getLocal)


    return(
        <>
            <Header />
            <Footer />
        </>

    ) 
}

export default Signin