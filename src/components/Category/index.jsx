import styles from "./Category.module.css"
import Videos from "../../json/videos.json"


 export const categories = [
    "Dicas Jiu Jitsu",
    "Dicas De Boa Alimentação",
    "Dicas Tecnologia",
    "Dicas React",
    "Dicas Games"
 ]
 
  export function filterCategory(id) {
    return Videos.filter(video => video.category === categories[id])
 }


function Category({categoria, children}){
    return(
        <section className={styles.category}>
            <h2>{categoria}</h2>
            <div>{children}</div>
        </section>

    );
}
export default Category;