import FirstSection from '../Main/FirstSection';
import SecondSection from '../Main/SecondSection';
import ThirdSection from '../Main/ThirdSection';
import '../../styles/main.scss';

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
