import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Categories from "./pages/Categories"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

function App() {

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col" >

      <Navbar />

      <main className="flex-1" >

        <Routes>

            <Route path="/"  element={<Home/>} />
            <Route path="/about"  element={<About/>} />
            <Route path="/products"  element={<Products/>} />
            <Route path="/categories"  element={<Categories/>} />
            <Route path="/product/:id"  element={<ProductDetails/>} />
            <Route path="/cart"  element={<Cart/>} />
            <Route path="/checkout"  element={<Checkout/>} />


        </Routes>

      </main>

      <Footer />
    </div>
  )
}

export default App
