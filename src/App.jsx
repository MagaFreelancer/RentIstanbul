import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import "./App.scss";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Admin from "./pages/Admin";
import RequireAuth from "./hoc/RequireAuth";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/admin/*"
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
