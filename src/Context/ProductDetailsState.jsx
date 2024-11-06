import React, { useState } from "react";
import ProductDetailsContext from "./ProductDetailsContext";

const ProductDetailsState = (props) => {
    const [productDetails, setProductDetails] = useState(null);

    const handleProductDetails = (laptop) => {
        setProductDetails(laptop);
    };

    return (
        <ProductDetailsContext.Provider
            value={{
                handleProductDetails,
                productDetails,
            }}
        >
            {props.children}
        </ProductDetailsContext.Provider>
    );
};

export default ProductDetailsState;
