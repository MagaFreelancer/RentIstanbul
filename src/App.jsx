import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import Car from "./pages/Car";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars/:id" element={<Car />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
