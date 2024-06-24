
import About from "../components/about"
import Categories from "../components/products/categories"
import { item } from "../types"

interface homeProps {
    featured: item[]
}

function Home({ featured }: homeProps) {

    return (
        <>
            <h1>Home page</h1>
            {/* hero section - main featured product */}

            {/* category links */}
            <Categories />

            {/* display featured items */}
            <ul>
                {featured?.map((item: item, index: number) => {
                    return <li key={`featured-${index}`}>{item.name}</li>
                })}
            </ul>

            {/* about component */}
            <About />
        </>
    )
}

export default Home