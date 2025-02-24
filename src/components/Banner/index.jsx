import styles from "./Banner.module.css"

function Banner({image}){
    return(
        <div 
        className={styles.banner}
        style={{backgroundImage:`URL('./imagens/banner-${image}.png')`}}
        >
            
        </div>
    )

}
export default Banner;