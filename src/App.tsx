import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {DefaultContent} from "./view/common/DefaultContent/DefaultContent";
import {Login} from "./view/pages/Login/Login";

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" Component={DefaultContent}></Route>
                    <Route path="/login" Component={Login}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}