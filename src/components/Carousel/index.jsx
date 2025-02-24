import Slider from "react-slick";
import "./carousel.css"

function Carousel({children}){
    
    const settings = {
        dots: false,            // Oculta os indicadores (pontos de navegação)
        infinite: false,        // Não permite rolagem infinita (impede looping)
        speed: 300,            // Define a velocidade da transição em milissegundos (300ms)
        centerMode: false,      // Desativa o modo centralizado (o slide ativo não fica no centro)
        variableWidth: true,    // Permite que os slides tenham larguras diferentes
        adaptiveHeight: true,   // Ajusta a altura do carrossel com base no slide ativo
        slidesToScroll: 1       // Faz rolar apenas um slide por vez
    };
    
    return(
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}
export default Carousel;


