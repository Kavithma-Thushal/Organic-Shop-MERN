import './App.css';
import {Navbar} from "./view/common/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./view/common/Footer/Footer";
import React from "react";
import {MainContent} from "./view/common/MainContent/MainContent";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <MainContent/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
