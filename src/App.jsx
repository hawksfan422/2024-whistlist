import { Box } from "@chakra-ui/react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import OtherList from "./pages/OtherList"

function App() {
  return (
    <>
      <Navbar/>
      <Box bg={('white')}>
        <Routes>
          <Route path= '/' element= {<Homepage />} />
          <Route path= '/OtherList' element= {<OtherList />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
