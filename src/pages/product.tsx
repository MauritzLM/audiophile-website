import { useParams } from "react-router-dom"
import { item, fetchedItems } from "../types";
import ProductCardFull from "../components/products/productCardFull";

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

            {/* features */}

            {/* in the box */}

            {/* images */}

            {/* other products component */}

            {/* categories component */}

            {/* about component */}
        </>
    )
}

export default Product