import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductCardShort from "../components/products/productCardShort"
import { item, fetchedItems } from "../types"
import Categories from "../components/products/categories"
import About from "../components/about"
import "/src/assets/sass/category.scss"

interface categoryProps {
    fetchedProducts: fetchedItems,
    updateProducts: (category: string, fetchedProducts: item[]) => void
}

function Category({ fetchedProducts, updateProducts }: categoryProps) {
    const { category } = useParams();

    useEffect(() => {
        // scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });

        // function to fetch category in params
        async function fetchCategory() {
            try {
                const response = await fetch(`https://audiophile-server-production-d261.up.railway.app/category/${category}`)

                const fetchedItems = await response.json()

                // update state
                updateProducts(category!, fetchedItems)

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
            <section id="inner-hero">
                <h1 data-testid="category-name">{category}</h1>
            </section>

            <div className="content-wrapper">
                {/* list of products */}
                <ul className="card-wrapper">
                    {fetchedProducts[category!]?.map((item: item, index: number) => {
                        return <ProductCardShort key={item.name} index={index} item={item} />
                    })}
                </ul>

                {/* categories component */}
                <Categories />


                {/* about component */}
                <About />
            </div>
        </>
    )
}

export default Category