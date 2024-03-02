import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import "./App.scss";
import Cars from "./pages/Cars";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
