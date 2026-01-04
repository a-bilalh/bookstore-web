import './App.css'
import BooksList from './booksList';
import BookDisplay from './components/BookDisplay';
import Menu from './components/menu';
import BookDetails from './pages/BookDetails';
import Registration from './registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart'
import Home from './pages/HomePage'
import CartProvider from './contexts/CartContexts';


function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/cart/" element={<Cart/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>


  )
}

export default App
