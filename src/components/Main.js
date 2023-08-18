import MainFirstSection from './MainFirstSection';
import MainSecondSection from './MainSecondSection';
import MainThirdSection from './MainThirdSection';
import '../styles/main.scss';

const Main = () => {
  return (
    <main class="main">
      <div class="main__div">
        <MainFirstSection />
        <MainSecondSection />
        <MainThirdSection />
      </div>
    </main>
  );
};

export default Main;
