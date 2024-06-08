import {Component} from "react";

export class Footer extends Component {
    render() {
        return (
            <footer className="p-4 bg-darkGreen flex justify-center items-center">
                <p className="text-sm text-white flex items-center">© 2024 All Rights Reserved. Designed by
                    <a href="https://github.com/Kavithma-Thushal" target="_blank">
                        <span className="text-lightGreen font-semibold ml-1">Kavithma Thushal</span>
                    </a>
                </p>
            </footer>
        );
    }
}