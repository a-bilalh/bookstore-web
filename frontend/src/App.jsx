import './App.css'
import BooksList from './booksList';
import BookDisplay from './components/BookDisplay';
import Menu from './components/menu';
import BookDetails from './pages/BookDetails';
import Registration from './registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart'
import Home from './pages/HomePage'
import { CartProvider }  from './contexts/CartContexts';
import Header from './components/Header.jsx';
import HeaderLayout from './layouts/HeaderLayout.jsx';


function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<HeaderLayout />}>
            <Route path="/" element={<Home/>} />
          </Route>
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/cart/" element={<Cart/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>


  )
}

export default App
