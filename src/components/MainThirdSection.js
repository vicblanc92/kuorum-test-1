import cardImage from '../images/card-image.png';
import '../styles/mainThirdSection.scss';

const MainThirdSection = () => {
  return (
    <section class="main__thirdsection">
      <img class="main__thirdsection--img " src={cardImage} alt="cardImage" />
      <div class="main__thirdsection--div">
        <p class=" main__title">Crea tu votación </p>
        <p class="main__text ">
          Construye tu votación en muy pocos pasos y obtén resultados
          inmediatos.
        </p>
        <a class="main__thirdsection--link" href="https://www.kuorum.org">
          Crea votación
        </a>
      </div>
    </section>
  );
};

export default MainThirdSection;
