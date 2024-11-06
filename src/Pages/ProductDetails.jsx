import React, { useContext } from "react";
import ProductDetailsContext from "../Context/ProductDetailsContext";

const ProductDetails = () => {
    const { productDetails } = useContext(ProductDetailsContext);

    console.log(productDetails);

    return (
        <>
            <div>Product Details Page</div>
        </>
    );
};

export default ProductDetails;
