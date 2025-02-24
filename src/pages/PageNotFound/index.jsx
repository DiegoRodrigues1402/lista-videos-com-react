import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./PageNotFound.module.css"


function PageNotFound(){
    return(
        <div>
            <Header/>
            <section className={styles.container}>
            <h2>
                Ops! Conteúdo não localizado.
            </h2>
            <img src="../../../public/imagens/erro404.png" alt="Página não localizada" />
        </section>
        <Footer/>
        </div>
    );
}
export default PageNotFound;