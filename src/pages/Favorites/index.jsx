import styles from "./Favorites.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import VideoList from "../../components/VideoList"
import { useFavoriteContext } from "../../contexts/Favoritos"


function Favorites() {
    const {favorite} = useFavoriteContext();
    return (
        <div>
            <Header />
            <Container>
                <section className={styles.favoritos}>
                    <h2>Favoritos</h2>
                    {<VideoList videos ={favorite}/>}
                </section>
            </Container>
            <Footer />


        </div>

    );
}
export default Favorites;