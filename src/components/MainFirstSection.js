import handsImage from '../images/hands-image.png';
import '../styles/mainFirstSection.scss';

const MainFirstSection = () => {
  return (
    <section class="main__firstsection">
      <img class="main__firstsection--img" src={handsImage} alt="handImage" />
      <div class="main__firstsection--div">
        <p class="main__text">
          Con esta votación has ayudado a reducir la huella de carbono
        </p>

        <a class="main__firstsection--link" href="https://www.kuorum.org">
          Saber más
        </a>
      </div>
    </section>
  );
};

export default MainFirstSection;
