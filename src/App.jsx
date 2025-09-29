import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Histoire from "./pages/histoire";
import Evenements from "./pages/evenements";
import Mariage from "./pages/mariage";
import Layout from "./pages/layout";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/mariage" element={<Mariage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
