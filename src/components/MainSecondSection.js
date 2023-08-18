import succesImage from '../images/success.png';
import '../styles/mainSecondSection.scss';

const MainSecondSection = () => {
  return (
    <section class="main__secondsection">
      <img
        src={succesImage}
        alt="succesImage"
        class="main__secondsection--img"
      />
      <p class="main__title ">Voto registrado</p>

      <p class="main__secondsection--text">
        Tu voto en la votación “Asamblea General de la Real Federación Española
        de vela 2023” se ha registrado.
      </p>
      <button class="main__secondsection--button">Descargar certificado</button>
      <p class="main__secondsection--text text-grey-100">
        El enlace de descarga de tu certificado de voto tiene una validez de 5
        minutos.
      </p>
    </section>
  );
};

export default MainSecondSection;
