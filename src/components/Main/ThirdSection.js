import cardImage from '../../images/card-image.png';
import '../../styles/thirdSection.scss';
import data from '../../texts/texts.json';

const MainThirdSection = () => {
  return (
    <section class="thirdsection">
      <img class="thirdsection__img" src={cardImage} alt="cardImage" />
      <article class="thirdsection__article">
        <p class=" thirdsection__title">{data.section.third.title} </p>
        <p class="main__text">{data.section.third.text}</p>
        <a class="thirdsection__link" href="https://www.kuorum.org">
          {data.section.third.link}
        </a>
      </article>
    </section>
  );
};

export default MainThirdSection;
