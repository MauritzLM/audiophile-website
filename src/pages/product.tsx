import { useParams } from "react-router-dom"
import { item, fetchedItems } from "../types"
import ProductCardFull from "../components/products/productCardFull"
import ProductFeatures from "../components/products/productFeatures"
import OtherProducts from "../components/products/otherProducts"
import Categories from "../components/products/categories"
import About from "../components/about"
import { useEffect, useState } from "react"
import "/src/assets/sass/product.scss"

interface productProps {
    fetchedProducts: fetchedItems,
    addToCart: (product: item, quantity: number) => void
}

function Product({ fetchedProducts, addToCart }: productProps) {
    // get category and product name from params
    const { productname, category } = useParams();

    const [product, setProduct] = useState<item>();

    // if product not in state then fetch it and update state
    useEffect(() => {
        // scroll top top
        window.scrollTo(0, 0);

        // function to fetch product
        async function fetchProduct() {
            try {
                const response = await fetch(`http://localhost:3000/product/${productname}`);

                const fetchedProduct = await response.json();

                setProduct(fetchedProduct);

            } catch (error) {
                console.log(error);
            }
        }

        // if product is already in app state
        if (fetchedProducts[category!] && fetchedProducts[category!].find(item => item.name === productname)) {
            setProduct(fetchedProducts[category!].find(item => item.name === productname))
        }

        // if product not found
        if (!product) {
            fetchProduct();
        }
    }, [category, product, productname, fetchedProducts]);

    // implement go back*

    return (
        <>
            {/* go back */}
            <h1 data-testid="product-name">{product?.name} page</h1>
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