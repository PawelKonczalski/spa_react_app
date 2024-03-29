import React from 'react'
import {Link} from 'react-router-dom';
import '../style/ProductsListPage.css';

const products = ["car", "bike", "motorcycle"];

const ProductsListPage = () => {

    const list = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ));

    return (
        <div className="products">

            <h2>Products List</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    )
};

export default ProductsListPage