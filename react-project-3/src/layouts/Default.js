import { Outlet } from "react-router-dom";
import Header from "../pages/Header";

export default function Default(){
    return(
        <>
        <Header/>
        <div className ="container">
            <Outlet/>
        </div>
        </>
    )
}