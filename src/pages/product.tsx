import { useParams } from "react-router-dom"
import { item, fetchedItems } from "../types"
import ProductCardFull from "../components/products/productCardFull"
import ProductFeatures from "../components/products/productFeatures"
import OtherProducts from "../components/products/otherProducts"
import Categories from "../components/products/categories"
import About from "../components/about"
import { useEffect, useState } from "react"
import "/src/assets/sass/product.scss"
import { Link } from "react-router-dom"


interface productProps {
    fetchedProducts: fetchedItems,
    addToCart: (product: item, quantity: number) => void,
    updateProducts: (category: string, fetchedProducts: item[]) => void
}

function Product({ fetchedProducts, addToCart, updateProducts }: productProps) {
    // get category and product name from params
    const { productname, category } = useParams();

    const [product, setProduct] = useState<item>();

    const [fetchError, setFetchError] = useState(false);

    // if product not in state then fetch it and update state
    useEffect(() => {
        // scroll top top
        window.scrollTo({ top: 0, behavior: "smooth" });

        // function to fetch product
        async function fetchProduct() {
            try {
                const response = await fetch(`https://audiophile-server-production-d261.up.railway.app/product/${productname}`);

                console.log(productname)

                const fetchedProduct = await response.json();

                if (fetchedProduct.error) {
                    setFetchError(true);
                    return
                }

                // update component state
                setProduct(fetchedProduct);

                // update app state
                updateProducts(category!, [fetchedProduct]);

            } catch (error) {
                console.log(error);
            }
        }

        // if product is already in app state
        if (fetchedProducts[category!] && fetchedProducts[category!].find(item => item.slug === productname)) {
            setProduct(fetchedProducts[category!].find(item => item.slug === productname))
            return
        }

        // if product not found
        if (product?.slug !== productname) {
            fetchProduct();
        }
    }, [category, product, productname, fetchedProducts, updateProducts]);

    // implement go back*

    if (fetchError) {
        return (
            <>
                {/* add error components */}
                <div className="content-wrapper">
                    <div className="product-wrapper">
                        <h2>Product not found</h2>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="content-wrapper">
                <div className="product-wrapper">
                    {/* go back */}
                    <Link className="go-back" to={`/${category}`}>Go back</Link>
                    {/* product card full component - update cart && product props */}
                    <ProductCardFull product={product!} addToCart={addToCart} />

                    {/* product features */}
                    <ProductFeatures product={product!} />

                    {/* other products component */}
                    <OtherProducts product={product!} />
                </div>

                {/* categories component */}
                <Categories />

                {/* about component */}
                <About />
            </div>
        </>
    )
}

export default Product