import handsImage from '../../images/hands-image.png';
import '../../styles/firstSection.scss';
import data from '../../texts/texts.json';

const FirstSection = () => {
  return (
    <section class="firstsection">
      <img class="firstsection__img" src={handsImage} alt="handImage" />
      <article class="firstsection__article">
        <p class="main__text">{data.section.first.title}</p>
        <a class="firstsection__link" href="https://www.kuorum.org">
          {data.section.first.link}
        </a>
      </article>
    </section>
  );
};

export default FirstSection;
