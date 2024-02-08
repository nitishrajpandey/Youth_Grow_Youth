import Navbar from "./Components/Header/Navbar";
import { BrowserRouter /*, Route, Routes */ } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Routes> */}
      {/* <Route path="/" element={<Home/>}/> */}
      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default App;
