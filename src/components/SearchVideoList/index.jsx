import { useEffect, useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearchVideoList.module.css";
import Loader from "../../components/Loader";

//filtrando video por categoria ou titulo
function FilterVideos(videos, searchText) {
    return videos.filter(video => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {
    const [searchText, setSearchText] = useState("");
    const foundVideos = FilterVideos(videos, searchText);

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
    }, [])

    return (

        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar ...."
                value={searchText}
                onChange={event => {
                    const text = event.target.value;
                    const formattedText = text
                        .toLowerCase() // Converte tudo para minúsculas
                        .split(' ') // Divide em palavras
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza cada palavra
                        .join(' '); // Junta de volta

                    setSearchText(formattedText);
                }}
            />
            {loading ? <Loader /> :
                <VideoList
                    videos={foundVideos}
                    emptyHeading={`Sem videos sobre ${searchText}`}
                />
            }
        </section>

    );
}
export default SearchVideoList;