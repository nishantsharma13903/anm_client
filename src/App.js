import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'
import ProductDetailPage from './components/ProductDetailPage'
// import AdminLogin from './Admin/Components/AdminLogin'
import ProcessPage from './components/ProcessPage';
import CartPage from './components/CartPage';
import AboutPage from './components/AboutPage';
import AdminLogin from './Admin/AdminLogin';
import DashboardPage from './Admin/DashboardPage';
import AllUsersPage from './Admin/AllUsersPage';
import CategoriesPage from './Admin/CategoriesPage';
import StockPage from './Admin/StockPage';
import ProductsPage from './Admin/ProductsPage';
import Signup from './components/Signup';
import Faq from './components/Faq';
import Header from './components/Header';


const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<><Login /><Footer /></>} />
            <Route path="/login" element={<><Login /><Footer /></>} />
            <Route path="/signup" element={<><Signup /><Footer /></>} />

            <Route path="/home" element={<HomePage />} /> 
            <Route path="/products" element={<ProductPage />} /> 
            <Route path="/products/detail" element={<ProductDetailPage />} /> 
            <Route path="/process" element={<ProcessPage />} /> 
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/faq" element={<><Header /><Faq /><Footer /></>} />



            <Route path="admin/login" element={<AdminLogin />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="users" element={<AllUsersPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="stock-management" element={<StockPage />} />
            <Route path="stocks" element={<ProductsPage />} />


            
         
        </Routes>
    </Router>

    );
};

export default App;