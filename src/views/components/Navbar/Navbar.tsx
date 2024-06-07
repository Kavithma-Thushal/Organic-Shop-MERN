import logo from "../../../assets/images/logo.jpg";

export function Navbar() {
    return (
        <nav className="bg-darkGreen text-white p-2 pr-7">
            <div className="container mx-auto flex justify-between items-center">
                <a href="https://github.com/Kavithma-Thushal" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <img src={logo} className="mr-2" style={{height: '8vmin'}} alt="Nav-logo"/>
                        <div className="text-lg font-bold">ORGANIC <span className="text-neonGreen">SHOP</span>
                        </div>
                    </div>
                </a>
                <div className="space-x-8 text-sm font-semibold">
                    <a href="#customers" className="hover:text-neonGreen transition-colors duration-300">CUSTOMERS</a>
                    <a href="#items" className="hover:text-neonGreen transition-colors duration-300">ITEMS</a>
                    <a href="#orders" className="hover:text-neonGreen transition-colors duration-300">ORDERS</a>
                    <a href="#orderDetails" className="hover:text-neonGreen transition-colors duration-300">ORDER
                        DETAILS</a>
                </div>
            </div>
        </nav>
    );
}