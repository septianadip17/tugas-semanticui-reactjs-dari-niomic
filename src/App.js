import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tugas10 from "./pages/Tugas10";
import Tugas11 from "./pages/Tugas11";
import Tugas12 from "./pages/Tugas12";
import Tugas13 from "./pages/Tugas13";
import Tugas14 from "./pages/Tugas14";
import Tugas15 from "./pages/Tugas15";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tugas10" element={<Tugas10 />} />
        <Route path="tugas11" element={<Tugas11 />} />
        <Route path="tugas12" element={<Tugas12 />} />
        <Route path="tugas13" element={<Tugas13 />} />
        <Route path="tugas14" element={<Tugas14 />} />
        <Route path="tugas15" element={<Tugas15 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
