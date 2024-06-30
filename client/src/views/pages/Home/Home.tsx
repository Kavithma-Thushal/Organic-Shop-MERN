import {useState, useEffect} from "react";
import axios from "axios";
import {Product} from "../../components/Product/Product";

export const Home = () => {

    const [data, setData] = useState([]);

    const api = axios.create({
        baseURL: `http://localhost:4000`
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get('/products/loadAllProducts');
                setData(res.data);
            } catch (error) {
                console.error("Axios Error", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex">
            <div className="flex flex-wrap">
                {data.map((product: any) => (
                    <Product key={product.id} data={product}/>
                ))}
            </div>
        </div>
    );
};
