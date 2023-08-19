import kuorumLogo from '../../images/logotipo.png';
import questionIcon from '../../images/question-icon.png';
import '../../styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src={kuorumLogo} alt="kuorumLogo" />
      <img src={questionIcon} alt="questionIcon" />
    </header>
  );
};

export default Header;
