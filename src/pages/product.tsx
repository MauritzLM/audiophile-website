import { useParams } from "react-router-dom"
import { item, fetchedItems } from "../types";
import ProductCardFull from "../components/products/productCardFull";
import ProductFeatures from "../components/products/productFeatures";
import OtherProducts from "../components/products/otherProducts";
import Categories from "../components/products/categories";
import About from "../components/about";

interface productProps {
    fetchedProducts: fetchedItems,
    updateCart: (product: item, quantity: number) => void
}

function Product({ fetchedProducts, updateCart }: productProps) {
    // get category and product name from params
    const { productname, category } = useParams();

    // get product from state
    const product = fetchedProducts[category!].find(item => item.name === productname);

    // implement go back*

    return (
        <>
            {/* go back */}
            <h1>{productname} page</h1>
            {/* product card full component - update cart && product props */}
            <ProductCardFull product={product!} updateCart={updateCart} />

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