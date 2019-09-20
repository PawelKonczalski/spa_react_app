import React from 'react'
import Product from "../components/Product";
import {Link} from "react-router-dom";

const ProductsPage = ({match}) => {
    return (
        <>
            <div>Products page</div>
            <Product id={match.params.id}/>
            <Link to='/products'>Return to list of products</Link>
        </>
    )
};

export default ProductsPage