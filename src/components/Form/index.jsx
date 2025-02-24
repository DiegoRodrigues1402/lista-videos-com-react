import styles from "./Form.module.css"
import { categories } from "../../components/Category"
import { useState } from "react"
function Form() {

    const [url, setUrl] = useState("")
    const [category, setCategory] = useState("")
    const [videos, setVideos] = useState([])
    const[errors, setErrors] = useState("")

    // função para validar video do youtube
    function validaUrl(url){
        regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
        if(!regex.test(url) || url.length < 43){
            setErrors("ERRO: url invalida")
            return false
        } else {
            return url.substring(32,43) // pegar  id do video
        }
    }

    function onSave(e) {
        e.preventDefault()

          //validar Category
        if (!category || category === '-') {
            setErrors('ERRO:Escolha uma Categoria')
            return
        } else {
            setErrors('')
        }

        //validar url
        const urlVideo = validaUrl(url);

        if(urlVideo && category){
             //preciso guardar a url e a category
        const newVideos = { url, category }
        setVideos([...videos, newVideos])
        //usamos essa linha  guardar um valor mesmo depois de atualizar a pagina
        localStorage.setItem('videos', JSON.stringify([...videos, newVideos]))
        //precisamos limpar o formulario
        setUrl('')
        setCategory('')
        }else{
            setErrors('ERRO: URL invalida')
        }


    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de video</h2>

            <form onSubmit={onSave}>
                <div>
                    <label>URL do video</label>
                    <input
                        type="text"
                        placeholder="Digite a url do video"
                        required={true}
                        value={url} //aqui passa a url que esta vazia 
                        onChange={e => setUrl(e.target.value)}//aqui mudamos o estado de vazio pelo oque esta digitando
                        maxLength='43'
                        minLength='43'
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required={true}
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-">Selecione uma categoria</option>
                        {categories.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    {errors}
                </div>
            </form>
        </section>
    )
}
export default Form;