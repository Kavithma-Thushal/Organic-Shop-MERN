import {Component} from "react";
import {AddToCart} from "../AddToCart/AddToCart";

interface ProductProps {
    data: any;
}

interface ProductState {
    isActive: boolean;
}

export class Product extends Component<ProductProps, ProductState> {
    constructor(props: ProductProps) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    private addToCartOnClick = () => {
        this.setState({
            isActive: true,
        });
    };

    render() {
        const {data} = this.props;
        const product = require('../../../assets/images/products/' + data.image);
        return (
            <div
                className="w-60 p-4 rounded-lg shadow-2xl bg-white flex flex-col justify-between items-center mt-[170px] ml-[200px]">
                <img className="h-32" src={product} alt={data.name}/>
                <div className="mt-4 w-full text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
                    <div className="mt-2 bg-blue-300 text-gray-600 px-3 py-1 rounded inline-block">
                        <span className="text-md font-medium">{data.price} {data.currency}</span>
                    </div>
                </div>
                <div className="mt-4 w-full flex justify-center">
                    {this.state.isActive ? (
                        <AddToCart data={{product: data, isAdded: this.state.isActive}}/>
                    ) : (
                        <button
                            className="w-full mt-2 py-2 bg-lightGreen text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
                            onClick={this.addToCartOnClick}>Add to Cart</button>
                    )}
                </div>
            </div>
        );
    }
}