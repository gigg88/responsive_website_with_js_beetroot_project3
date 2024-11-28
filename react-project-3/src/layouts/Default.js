import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer"

export default function Default(){
    return(
        <>
        <Header/>
            <div className ="container">
            <Outlet/>
        </div>
        <Footer/>
        </>
    )
}