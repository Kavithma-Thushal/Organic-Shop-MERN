import {Component} from "react";
import {Link} from "react-router-dom";
import logo from '../../../assets/images/logo.png';

export class NavBar extends Component {
    render() {
        return (
            <div className="w-full p-4 bg-darkGreen flex items-center fixed justify-between">
                <div className="flex items-center">
                    <a href="https://github.com/Kavithma-Thushal/Organic-Shop-MERN.git" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 w-8 mr-4" src={logo} alt="Logo"/>
                    </a>
                    <a href="https://github.com/Kavithma-Thushal/Organic-Shop-MERN.git" target="_blank" rel="noopener noreferrer">
                        <h1 className="text-xl text-white font-semibold">Organic <span
                            className="text-lightGreen">Shop</span></h1>
                    </a>
                </div>
                <div className="flex items-center space-x-10">
                    <ul className="list-none flex space-x-10">
                        <li className="text-white font-semibold cursor-pointer hover:text-lightGreen transition duration-300">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-white font-semibold cursor-pointer hover:text-lightGreen transition duration-300">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="text-white font-semibold cursor-pointer hover:text-lightGreen transition duration-300">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="text-white font-semibold cursor-pointer hover:text-lightGreen transition duration-300">
                            <Link to="/shopping-cart">Cart</Link>
                        </li>
                    </ul>
                    <button
                        className="text-sm text-white font-semibold bg-lightGreen px-4 py-2 rounded hover:bg-green-700 transition duration-300">
                        <Link to="/login">Login</Link>
                    </button>
                </div>
            </div>
        );
    }
}