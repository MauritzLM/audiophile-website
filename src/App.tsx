
import './assets/sass/index.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Category from './pages/category'
import Product from './pages/product'
import Checkout from './pages/checkout'
import ErrorPage from './pages/error-page'
import { useState, useEffect } from 'react'

// fetched items types
interface fetchedItems {
  earphones: [],
  headphones: [],
  speakers: []
}

// fetched product types
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


function App() {
  // fetched products state
  const [products, setProducts] = useState<fetchedItems>({ earphones: [], headphones: [], speakers: [] });
  // featured products
  const [featured, setFeatured] = useState<item[]>([])
  // cart state
  const [cart, setCart] = useState<item[]>([]);

  const updateProducts = function (category: string, items: item[]) {
    setProducts({ ...products, [category]: [...items] })
  }

  const updateCart = function (product: item) {
    setCart([...cart, product])
  }

  // fetch featured products
  async function fetchFeatured() {
    try {
      const response = await fetch('http://localhost:3000/featured')

      const message: item[] = await response.json()

      setFeatured([...message])

      console.log(message)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // fetch featured items if not yet done so
    if (!featured.length) {
      fetchFeatured()
    }
  }, [featured.length]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home featured={featured}/>} />
        <Route path='/:category' element={<Category products={products} updateProducts={updateProducts} />} />
        <Route path='/:category/:productname' element={<Product products={products} updateCart={updateCart} />} />
        <Route path='/checkout' element={<Checkout cart={cart} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
