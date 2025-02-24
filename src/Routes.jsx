import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "../src/pages/Favorites"
import FavoritesProvider from "./contexts/Favoritos";
import VideoCadastre from "./pages/VideoCadastre";



function MainRoutes() {
    return (
        <BrowserRouter>
                <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Watch/:id" element={<Watch />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/Search" element={<Search />} />
                    <Route path="/Favorites" element={<Favorites />} />
                    <Route path="/Cadastres" element={<VideoCadastre />} />
                </Routes>
                </FavoritesProvider>
                
            
        </BrowserRouter>
    );
}
export default MainRoutes;