import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route ,Navigate } from "react-router-dom";
import CatBreedPage from "./pages/CatBreedPage";
import PopularCatsPage from "./pages/PopularCatsPage";
import DashboardPage from "./pages/DashboardPage";
import { useAdmin, useAuth } from "./hooks/useAuth";
import UpdateCatBreedPage from "./pages/UpdateCatBreedPage";
import CreateNewCatPage from "./pages/CreateNewCatPage";

function App() {
  const isLoggedIn = useAuth();
  const isAdmin = useAdmin();
  console.log();
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={isLoggedIn==='loged' ? <Navigate to="/" /> : <Register />} />
        <Route exact path="/dashboard" element={isLoggedIn==='loged' && isAdmin? <DashboardPage /> : <Navigate to="/login" />} />
        <Route exact path="/dashboard/create-new" element={isLoggedIn==='loged' && isAdmin? <CreateNewCatPage /> : <Navigate to="/login" />} />
        <Route exact path="/dashboard/update/:id" element={isLoggedIn==='loged' && isAdmin? <UpdateCatBreedPage /> : <Navigate to="/login" />} />
        <Route exact path="/cat-breed/:id" element={<CatBreedPage />} />
        <Route exact path="/popular-cats" element={<PopularCatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
