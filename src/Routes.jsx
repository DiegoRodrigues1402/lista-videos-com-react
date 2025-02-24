import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./contexts/Favoritos";
import VideoCadastre from "./pages/VideoCadastre";

function MainRoutes() {
    return (
        <Router>
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
        </Router>
    );
}

export default MainRoutes;
