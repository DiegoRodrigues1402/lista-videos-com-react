import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import favorito from "./favorite.png";
import { useFavoriteContext } from "../../contexts/Favoritos";
import unFavorito from "./unfavorite.png";

function Card({ id }) {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some( fav => fav.id === id);
    const icone = isFavorite ?  unFavorito : favorito;
    
    return (
        <section className={styles.card}>
            <Link to={`/Watch/${id}`}>
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="capa" className={styles.capa} />
            </Link>

            <figure className={styles.icon}>
                <img
                    src={icone}
                    alt="ícone de favorito"
                    onClick={() => addFavorite({ id })}
                />

            </figure>

        </section>
    );
}

export default Card;
