import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Card from "../../components/Card/index.jsx"
import Category, { categories, filterCategory } from "../../components/Category/index.jsx"
import Carousel from "../../components/Carousel/index.jsx"



function Home() {
   return (
      <div>
         <Header />
         <Banner image={"home"} />
         <Container>
            {categories.map((Categoria, index) => (
               <Category categoria={Categoria} key={index}>
                  <Carousel>
                     {filterCategory(index).map(novoArray => (
                        <Card id={novoArray.id} key={novoArray.id} />
                     ))}
                  </Carousel>
               </Category>
            ))}
         </Container>
         <Footer />
      </div>
   )
}
export default Home