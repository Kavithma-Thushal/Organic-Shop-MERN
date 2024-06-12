import {Component} from "react";

export class About extends Component {
    render() {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="p-8 m-8 bg-white rounded-lg shadow-lg mt-[-180px]">
                    <h2 className="pb-4 text-4xl font-bold text-center text-green-600 border-b-2 border-green-200">About
                        Us</h2>
                    <p className="pt-4 text-lg text-gray-700 leading-relaxed">
                        At Organic Shop, we believe in the power of nature to nourish, heal, and inspire. Our journey
                        began with a simple yet profound realization: the importance of embracing organic living for the
                        well-being of both individuals and the planet.
                    </p>
                    <p className="pt-4 text-lg text-gray-700 leading-relaxed">
                        <strong>Mission:</strong> Our mission is to make organic living accessible to all, fostering a
                        harmonious relationship between people and the environment. We are committed to offering a
                        diverse range of high-quality, ethically sourced, and sustainable products that promote health,
                        wellness, and a greener lifestyle.
                    </p>
                </div>
            </div>
        );
    }
}