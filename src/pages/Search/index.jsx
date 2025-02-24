import styles from './Search.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import SearchVideoList from '../../components/SearchVideoList'
import Videos from "../../json/videos.json"


function Search() {
    return (
        <div>
            <Header />
            <Container>
                <section className={styles.search}>
                    <h2>Pesquisar</h2>
                    <SearchVideoList videos={Videos} />
                </section>
            </Container>
            <Footer />
        </div>
    );
}
export default Search;