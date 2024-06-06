
import { Link } from "react-router-dom"
import Categories from "../components/categories"

function Home({ featured }) {

    return (
        <>
            <h1>Home page</h1>

            {/* category links */}
            <Categories />

            {/* display featured items */}
            <ul>
                {featured.map(item => {
                   return <li>{item.name}</li>
                })}
            </ul>
        </>
    )
}

export default Home