import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductCardShort from "../components/productCardShort"

interface item {
    id: number,
    slug: string,
    name: string,
    image: {
        mobile: string,
        tablet: string,
        desktop: string
    },
    category: string,
    categoryImage: {
        mobile: string,
        tablet: string,
        desktop: string
    },
    new: boolean,
    price: number,
    description: string,
    features: string,
    includes: {
        quantity: number,
        item: string
    }[],
    gallery: {
        first: {
            mobile: string,
            tablet: string,
            desktop: string
        },
        second: {
            mobile: string,
            tablet: string,
            desktop: string
        },
        third: {
            mobile: string,
            tablet: string,
            desktop: string
        }
    },
    others: {
        slug: string,
        name: string,
        image: {
            mobile: string,
            tablet: string,
            desktop: string
        }
    }[],
    featured: boolean
}

function Category({ products, updateProducts }) {
    const { category } = useParams();
    // console.log(typeof category)

    // fetch all products of category and update state*
    async function fetchCategory() {
        try {
            const response = await fetch(`http://localhost:3000/category/${category}`)

            const fetchedProducts: item[] = await response.json()

            updateProducts(category, fetchedProducts)

            console.log(fetchedProducts);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(!products.category?.length) {
            fetchCategory()
        }
        
    }, [category])

    return (
        <>
            <h1>{category} page</h1>

            <ul>
                {products[category].map(item => {
                    return <ProductCardShort item={item}/>
                })}
            </ul>
        </>
    )
}

export default Category