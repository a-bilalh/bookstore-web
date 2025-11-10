import './App.css'
import BooksList from './booksList';
import BookDisplay from './components/BookDisplay';
import Menu from './components/menu';
import BookDetails from './pages/BookDetails';
import Registration from './registration';


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/book/:id" element={<BookDetails/>} />
          <Route path="/cart/" element={<Cart/>} />
        </Routes>
        
      
      </BrowserRouter>


  )
}

export default App
