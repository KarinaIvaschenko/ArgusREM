import './App.css'
import {Route, Routes} from "react-router-dom";
import MainScreen from "./pages/MainScreen/MainScreen.tsx";
import AboutUs from "./pages/AboutUs/AboutUs.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import Blog from "./pages/Blog/Blog.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Authorization from "./pages/Authorization/Authorization.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Favorites from "./pages/Favorites/Favorites.tsx";
import Admin from "./pages/Admin/Admin.tsx";
import Delivery from "./pages/Delivery/Delivery.tsx";
import Categories from "./pages/Categories/Categories.tsx";
import Product from "./pages/Product/Product.tsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/">
                    <Route index element={<MainScreen/>}/>
                    <Route path='aboutUs' element={<AboutUs/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='blog' element={<Blog/>}/>
                    <Route path='authorization' element={<Authorization/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='favorites' element={<Favorites/>}/>
                    <Route path='admin' element={<Admin/>}/>
                    <Route path='delivery' element={<Delivery/>}/>
                    <Route path='categories' element={<Categories/>}/>
                    <Route path="shop/:id" element={<Product/>}/>
                    <Route path="404" element={<NotFoundPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
