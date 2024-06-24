import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductCardShort from "../components/products/productCardShort"
import { item, fetchedItems } from "../types"
import Categories from "../components/products/categories"
import About from "../components/about"

interface categoryProps {
    fetchedProducts: fetchedItems,
    updateProducts: (category: string, fetchedProducts: item[]) => void
}

function Category({ fetchedProducts, updateProducts }: categoryProps) {
    const { category } = useParams();

    useEffect(() => {

        // function to fetch category in params
        async function fetchCategory() {
            try {
                const response = await fetch(`http://localhost:3000/category/${category}`)

                const fetchedItems = await response.json()

                // update state
                updateProducts(category!, fetchedItems)

                console.log(fetchedItems);

            } catch (error) {
                console.log(error)
            }
        }
        // fetch products if they are not in state
        // non-null assertion operator (!)
        if (fetchedProducts[category!]?.length === 0) {
            fetchCategory()
        }

    }, [category, fetchedProducts, updateProducts])

    return (
        <>
            <h1 data-testid="category-name">{category} page</h1>

            {/* list of products */}
            <ul>
                {fetchedProducts[category!]?.map((item: item, index: number) => {
                    return <ProductCardShort key={item.name} index={index} item={item} />
                })}
            </ul>

            {/* categories component */}
            <Categories />


            {/* about component */}
            <About />
        </>
    )
}

export default Category