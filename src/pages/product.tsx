import { useParams } from "react-router-dom"
import { item, fetchedItems } from "../types";
import ProductCardFull from "../components/products/productCardFull";
import ProductFeatures from "../components/products/productFeatures";
import OtherProducts from "../components/products/otherProducts";
import Categories from "../components/products/categories";
import About from "../components/about";
import { useEffect, useState } from "react";

interface productProps {
    fetchedProducts: fetchedItems,
    addToCart: (product: item, quantity: number) => void
}

function Product({ fetchedProducts, addToCart }: productProps) {
    // get category and product name from params
    const { productname, category } = useParams();

    const [product, setProduct] = useState(fetchedProducts[category!].find(item => item.name === productname));

    async function fetchProduct() {
        try {
            const response = await fetch(`http://localhost:3000/product/${productname}`);

            const fetchedProduct = await response.json();

            setProduct(fetchedProduct);

        } catch (error) {
            console.log(error);
        }
    }

    // if product not in state then fetch it and update state
    useEffect(() => {
        if (!product) {
            fetchProduct();
        }
    });

    // implement go back*

    return (
        <>
            {/* go back */}
            <h1>{productname} page</h1>
            {/* product card full component - update cart && product props */}
            <ProductCardFull product={product!} addToCart={addToCart} />

            {/* product features */}
            <ProductFeatures product={product!} />

            {/* other products component */}
            <OtherProducts product={product!} />

            {/* categories component */}
            <Categories />

            {/* about component */}
            <About />
        </>
    )
}

export default Product