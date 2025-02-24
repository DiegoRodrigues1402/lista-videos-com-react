import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Watch.module.css"
import Videos from "../../json/videos.json"
import PageNotFound from "../PageNotFound";


function Watch() {
    const params = useParams()
    const Video = Videos.find(video => { return video.id === params.id })
    if (!Video) { return <PageNotFound /> }

    return (
        <div>
            <Header />
            <Banner image={"assistir"} />
            <Container>
                <section className={styles.watch}>
                    <iframe
                        width="854" height="480"
                        src={`https://www.youtube.com/embed/${Video.id}?si=8Q5U6U-1asU6V4oI`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </section>
            </Container>
            <Footer />
        </div>
    );
}
export default Watch;