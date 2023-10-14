
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        Header
        <Routes>
          <Route path='/' element={<Home/>}/>

         </Routes>
      </Router>
    </>
  )
}

export default App
