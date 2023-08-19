import succesImage from '../../images/success.png';
import '../../styles/secondSection.scss';
import data from '../../texts/texts.json';

const SecondSection = () => {
  return (
    <section class="secondsection">
      <figure class="secondsection__img">
        <img src={succesImage} alt="succesImage" />
      </figure>
      <article class="secondsection__article">
        <p class="secondsection__title">{data.section.second.title}</p>
        <p class="secondsection__text">{data.section.second.first_text}</p>
        <button class="secondsection__button">
          {data.section.second.button}
        </button>
        <p class="secondsection__second-text ">
          {data.section.second.second_text}
        </p>
      </article>
    </section>
  );
};

export default SecondSection;
