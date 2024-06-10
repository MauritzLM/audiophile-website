
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
import Cart from './components/payment/cart'
import { item, fetchedItems } from './types'


function App() {
  // fetched products state
  const [fetchedProducts, setFetchedProducts] = useState<fetchedItems>({ "earphones": [], "headphones": [], "speakers": [] });
  // featured products
  const [featured, setFeatured] = useState<item[]>([])
  // cart state
  const [cart, setCart] = useState<item[]>([]);

  // update fetched products state function
  const updateProducts = function (category: string, items: item[]) {
    setFetchedProducts({ ...fetchedProducts, [category]: [...items] })
  }

  // update cart state function
  const updateCart = function (product: item, quantity: number) {
    const arr = [];
    for (let i = 0; i < quantity; i++) {
      arr.push(product)
    }

    setCart([...cart, ...arr])
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
      <main id='main'>
        <Cart cart={cart} updateCart={updateCart} />
        <Routes>
          <Route path='/' element={<Home featured={featured} />} />
          <Route path='/:category' element={<Category fetchedProducts={fetchedProducts} updateProducts={updateProducts} />} />
          <Route path='/:category/:productname' element={<Product fetchedProducts={fetchedProducts} updateCart={updateCart} />} />
          <Route path='/checkout' element={<Checkout cart={cart} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
