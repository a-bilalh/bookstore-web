import './App.css'
import BookDetails from './pages/BookDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart'
import Home from './pages/HomePage'
import { CartProvider }  from './contexts/CartContext.jsx';
import HeaderLayout from './layouts/HeaderLayout.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';


function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
        <MainLayout>
          <Routes>
            <Route element={<HeaderLayout />}>
              <Route path="/" element={<Home/>} />
            </Route>
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </MainLayout>
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>


  )
}

export default App
