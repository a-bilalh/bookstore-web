import './App.css'
import BooksList from './booksList';
import BookDisplay from './components/BookDisplay';
import Menu from './components/menu';
import Registration from './registration';


function App() {
  return (
      <BookDisplay title="Sample Book" author="Author Name" cover={null} />
  )
}

export default App
