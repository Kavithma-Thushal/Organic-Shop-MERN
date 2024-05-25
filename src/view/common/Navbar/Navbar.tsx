import {Component} from "react";
import {Link} from "react-router-dom";
import logo from '../../../assets/images/nav_logo.jpg';

export class Navbar extends Component {
    render() {
        function onSignInClick() {
            alert("Sign In Successfully...!");
        }

        return (
            <nav className="bg-[#091544] p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <img className="h-12" src={logo} alt="Nav-Logo"/>
                        <h1 className="text-xl text-green-500 ml-4">Organic Shop</h1>
                    </div>
                    <ul className="flex space-x-8">
                        <li><Link className="text-[#e6f0e6] hover:text-green-500 transition duration-300"
                                  to="/">Home</Link></li>
                        <li><Link className="text-[#e6f0e6] hover:text-green-500 transition duration-300"
                                  to="/about">About</Link></li>
                        <li><Link className="text-[#e6f0e6] hover:text-green-500 transition duration-300"
                                  to="/contact">Contact</Link></li>
                    </ul>
                    <button
                        className="bg-green-500 text-[#e6f0e6] px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                        onClick={onSignInClick}>Sign In
                    </button>
                </div>
            </nav>
        );
    }
}
