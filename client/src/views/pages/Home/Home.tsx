import {Component} from "react";
import axios from "axios";
import {Product} from "../../components/Product/Product";

export class Home extends Component {

    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({
            baseURL: `http://localhost:4000`
        });
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            this.api.get('/products/allProducts')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    this.setState({data: jsonData});
                }).catch((error: any) => {
                console.error("Axios Error", error);
            });
        } catch (error) {
            console.error('Fetching Data Error : ', error);
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;
        return (
            <div className="flex">
                <div className="flex flex-wrap">
                    {data.map((product: any) => (<Product key={product.id} data={product}/>))}
                </div>
            </div>
        );
    }
}