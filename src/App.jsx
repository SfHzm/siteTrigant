import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Histoire from "./pages/histoire";
import Evenements from "./pages/evenements";
import Mariage from "./pages/mariage";
import MentionsLegales from "./pages/mentions.jsx";
import Layout from "./pages/layout";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/mariage" element={<Mariage />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
