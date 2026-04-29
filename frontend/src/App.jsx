import './App.css'
import BookDetails from './pages/BookDetails.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart.jsx';
import Home from './pages/HomePage.jsx';
import { CartProvider }  from './contexts/CartContext.jsx';
import HeaderLayout from './layouts/HeaderLayout.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Checkout from './pages/Checkout.jsx';
import Payment from './pages/Payment.jsx';


function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
        <MainLayout>
          <Routes>
            <Route element={<HeaderLayout />}>
              <Route path="/" element={<Home/>} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/cart/" element={<Cart/>} />
            </Route>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </MainLayout>
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>


  )
}

export default App
