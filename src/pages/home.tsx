
import { Link } from "react-router-dom"
import About from "../components/about"
import Categories from "../components/products/categories"
import { item } from "../types"
import "/src/assets/sass/home.scss"
import { useEffect } from "react"
import { getImageURL } from "../utils/image-util"

interface homeProps {
    featured: item[]
}

function Home({ featured }: homeProps) {

    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <>
            {/* hero section - main featured product */}
            <section id="hero">
                <picture>
                    <source media="(max-width: 700px)" srcSet={getImageURL("/src/assets/images/home/mobile/image-header.jpg")} />
                    <source media="(max-width: 1000px)" srcSet={getImageURL("/src/assets/images/home/tablet/image-header.jpg")} />
                    <source media="(min-width: 1001px)" srcSet={getImageURL("/src/assets/images/home/desktop/image-hero.jpg")} />
                    <img src={getImageURL("/src/assets/images/home/desktop/image-hero.jpg")} alt="" aria-hidden="true" decoding="async" width="" height="" loading="eager" />
                </picture>

                <div className="cs-text">
                    <p className="new">new product</p>

                    <h1>XX99 Mark II HeadphoneS</h1>

                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

                    <Link className="cs-button" to="/headphones/XX99 Mark II Headphones">see product</Link>
                </div>
            </section>

            <div className="home-content-wrapper">
                {/* category links */}
                <Categories />


                {/* display featured items */}
                <ul className="home-featured">
                    {featured?.map((item: item, index: number) => {
                        // three separate returns*
                        // if item 1
                        if (index === 0) {
                            // split string to format name
                            const nameArr = item.slug.split("-");

                            return <li key={item.name}>
                                {/* image, p, button */}
                                <picture>
                                    <source media="(max-width: 700px)" srcSet={getImageURL(`../assets/images/home/mobile/image-${item.slug}.png`)} />
                                    <source media="(max-width: 1000px)" srcSet={getImageURL(`../assets/images/home/tablet/image-${item.slug}.png`)} />
                                    <source media="(min-width: 1001px)" srcSet={getImageURL(`../assets/images/home/desktop/image-${item.slug}.png`)} />
                                    <img src={getImageURL(`../assets/images/home/desktop/image-${item.slug}.png`)} alt="" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />

                                </picture>

                                <div className="cs-text">
                                    <h2>{nameArr[0]}<br /> {nameArr[1]}</h2>
                                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                                    <Link className="cs-button" to={`/${item.category}/${item.name}`}>see product</Link>
                                </div>
                            </li>
                        }

                        // if item 2
                        if (index === 1) {

                            <li key={item.name}>
                                <picture>
                                    <source media="(max-width: 700px)" srcSet={getImageURL(`../assets/images/home/mobile/image-${item.slug}.jpg`)} />
                                    <source media="(max-width: 1000px)" srcSet={getImageURL(`../assets/images/home/tablet/image-${item.slug}.jpg`)} />
                                    <source media="(min-width: 1001px)" srcSet={getImageURL(`../assets/images/home/desktop/image-${item.slug}.jpg`)} />
                                    <img src={getImageURL(`../assets/images/home/desktop/image-${item.slug}.jpg`)} alt="" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                                </picture>

                                <div className="cs-text">
                                    <h2>{item.slug.replace("-", " ")}</h2>
                                    <Link className="cs-button" to={`/${item.category}/${item.name}`}>see product</Link>
                                </div>
                            </li>
                        }

                        // if item 3
                        return <li key={item.name}>
                            <picture>
                                <source media="(max-width: 700px)" srcSet={getImageURL(`../assets/images/home/mobile/image-${item.slug}.jpg`)} />
                                <source media="(max-width: 1000px)" srcSet={getImageURL(`../assets/images/home/tablet/image-${item.slug}.jpg`)} />
                                <source media="(min-width: 1001px)" srcSet={getImageURL(`../assets/images/home/desktop/image-${item.slug}.jpg`)} />
                                <img src={getImageURL(`../assets/images/home/desktop/image-${item.slug}.jpg`)} alt="" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                            </picture>

                            <div className="cs-text">
                                <h2>{item.slug.replace("-", " ")}</h2>
                                <Link className="cs-button" to={`/${item.category}/${item.name}`}>see product</Link>
                            </div>
                        </li>

                    })}
                </ul>

                {/* about component */}
                <About />

            </div>
        </>
    )
}

export default Home