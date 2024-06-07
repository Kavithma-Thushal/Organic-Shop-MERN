import logo from "../../../assets/images/logo.jpg";

export function Navbar() {

    function login() {
        alert("Login Successfully...!")
    }

    return (
        <nav className="bg-darkGreen text-white p-2 pr-7">
            <div className="container mx-auto flex justify-between items-center">
                <a href="https://github.com/Kavithma-Thushal" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <img src={logo} className="mr-2" style={{height: '8vmin'}} alt="Nav-logo"/>
                        <div className="text-lg font-bold">MOBILE <span className="text-neonGreen">HUB</span>
                        </div>
                    </div>
                </a>
                <div className="space-x-8 text-sm font-semibold">
                    <a href="dashboard" className="hover:text-neonGreen transition-colors duration-300">DASHBOARD</a>
                    <a href="customer" className="hover:text-neonGreen transition-colors duration-300">CUSTOMER</a>
                    <a href="item" className="hover:text-neonGreen transition-colors duration-300">INVENTORY</a>
                    <a href="orders" className="hover:text-neonGreen transition-colors duration-300">ORDERS</a>
                    <a href="orderDetails" className="hover:text-neonGreen transition-colors duration-300">ORDER
                        DETAILS</a>
                    <button
                        className="ml-4 px-4 py-2 bg-neonGreen text-white font-semibold rounded hover:text-darkGreen transition-colors duration-300"
                        onClick={login}>LOGIN
                    </button>
                </div>
            </div>
        </nav>
    );
}