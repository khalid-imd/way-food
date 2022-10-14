import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing";
import EditProfileuser from "./components/editProfileUser";
import Navigation from "./components/navbar";
import HistoryTransaction from "./components/historyTransaction";
import RestoMenu from "./components/restoMenu";
import CartPage from "./components/cartPage";
import EditProfilePartner from "./components/editProfilePartner";
import IncomeTransaction from "./components/incomeTransaction";
import HistoryPartner from "./components/historyPartner";
import AddProduct from "./components/addProduct";
import NavigationPartner from "./components/navbarPartner";
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/profile-user" element={<HistoryTransaction />} />
          <Route exact path="/menu" element={<RestoMenu />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route
            exact
            path="/edit-profile-user"
            element={<EditProfileuser />}
          />
          <Route
            exact
            path="/edit-profile-partner"
            element={<EditProfilePartner />}
          />
          <Route
            exact
            path="/income-transaction"
            element={<IncomeTransaction />}
          />
          <Route exact path="/profile-partner" element={<HistoryPartner />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path="/navbar-partner" element={<NavigationPartner />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
