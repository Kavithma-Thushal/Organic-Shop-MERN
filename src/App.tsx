import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";
import {Login} from "./view/pages/Login/Login";

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" Component={DefaultLayout}></Route>
                    <Route path="/login" Component={Login}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}