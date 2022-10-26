import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navbar";
import AddProduct from "./pages/addProduct";
import CartPage from "./pages/cartPage";
import EditProfilePartner from "./pages/editProfilePartner";
import EditProfileuser from "./pages/editProfileUser";
import IncomeTransaction from "./pages/incomeTransaction";
import Landing from "./pages/landing";
import ProfilePartner from "./pages/profilePartner";
import ProfileUser from "./pages/profileUser";
import RestoMenu from "./pages/restoMenu";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route exact path="/profile-user" element={<ProfileUser />} />
        <Route exact path="/edit-profile-user" element={<EditProfileuser />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/menu" element={<RestoMenu />} />

        <Route exact path="/profile-partner" element={<ProfilePartner />} />
        <Route
          exact
          path="/edit-profile-partner"
          element={<EditProfilePartner />}
        />
        <Route exact path="/add-product" element={<AddProduct />} />
        <Route
          exact
          path="/income-transaction"
          element={<IncomeTransaction />}
        />
      </Routes>
    </Router>
  );
}

export default App;
