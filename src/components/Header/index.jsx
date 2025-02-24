import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to={"/"}>
                <span>PiratasFlix</span>
            </Link>

            {/* Menu hamburguer - Checkbox escondido */}
            <input type="checkbox" className={styles.menuToggle} id="menu-toggle" />
            
            {/* Ícone do menu hamburguer */}
            <label htmlFor="menu-toggle" className={styles.menuIcon}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </label>

            {/* Menu de navegação */}
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/Search"}>Pesquisar</Link>
                <Link to={"/Cadastres"}>Cadastrar</Link>
                <Link to={"/Favorites"}>Favoritos</Link>
            </nav>
        </header>
    );
}

export default Header;
