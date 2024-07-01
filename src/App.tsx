
import '/src/assets/sass/index.scss'
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
  const [fetchedProducts, setFetchedProducts] = useState<fetchedItems>({ "earphones": [], "headphones": [], "speakers": [] })
  // featured products
  const [featured, setFeatured] = useState<item[]>([])
  // cart state
  const [cart, setCart] = useState<item[]>([])
  // view cart
  const [viewCart, setViewCart] = useState(false)

  // update fetched products state function
  const updateProducts = function (category: string, items: item[]) {
    setFetchedProducts({ ...fetchedProducts, [category]: [...items] })
  }

  // update product quantity in cart
  const updateCart = function (product: item, quantity: number) {

    // remove all instances of product
    const newCart = cart.filter(cartItem => product.name !== cartItem.name)

    // else add item * quantity to cart
    const newProduct = [];
    for (let i = 0; i < quantity; i++) {
      newProduct.push(product)
    }

    // update state
    setCart([...newCart, ...newProduct])
    // update local storage
    localStorage.setItem("cart", JSON.stringify([...newCart, ...newProduct]))
  }

  // add product quantity to cart
  const addToCart = function (product: item, quantity: number) {
    const arr = [];
    for (let i = 0; i < quantity; i++) {
      arr.push(product)
    }

    // update state
    setCart([...cart, ...arr])
    // update local storage
    localStorage.setItem("cart", JSON.stringify([...cart, ...arr]))
  }

  // remove all items from cart
  const clearCart = function () {
    setCart([])
    // clear local storage
    localStorage.removeItem("cart")
  }

  const handleViewCart = function () {
    if (viewCart) {
      setViewCart(false)
      return
    }

    setViewCart(true)
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
    // check local storage for cart
    if (localStorage.cart) {
      const savedCart = JSON.parse(localStorage.cart)
      setCart([...savedCart])
    }

    // fetch featured items if not yet done so
    if (!featured.length) {
      fetchFeatured()
    }
  }, [featured.length])

  return (
    <>
      <Header handleViewCart={handleViewCart} />
      <main id='main'>
        <Cart cart={cart} updateCart={updateCart} clearCart={clearCart} viewCart={viewCart} handleViewCart={handleViewCart} />
        <Routes>
          <Route path='/' element={<Home featured={featured} />} />
          <Route path='/:category' element={<Category fetchedProducts={fetchedProducts} updateProducts={updateProducts} />} />
          <Route path='/:category/:productname' element={<Product fetchedProducts={fetchedProducts} addToCart={addToCart} />} />
          <Route path='/checkout' element={<Checkout cart={cart} clearCart={clearCart} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
