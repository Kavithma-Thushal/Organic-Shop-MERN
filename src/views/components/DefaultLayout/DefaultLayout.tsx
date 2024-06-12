import {Component} from "react";
import {NavBar} from "../Navbar/NavBar";
import {MainContent} from "../MainContent/MainContent";
import {Footer} from "../Footer/Footer";

export class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <MainContent/>
                <Footer/>
            </div>
        );
    }
}