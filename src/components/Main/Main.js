import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';
import ThirdSection from './Sections/ThirdSection';
import '../../styles/Main/main.scss';

const Main = () => {
  return (
    <main class="main">
      <div class="main__div">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </main>
  );
};

export default Main;
