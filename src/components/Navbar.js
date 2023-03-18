import { NavLink, useParams } from 'react-router-dom';
import { AiOutlineHome, AiOutlineKey, AiOutlineLeft, AiOutlineQuestionCircle } from "react-icons/ai";
import './Navbar.css'

const Navbar = () => {
    const handleOpenSearch = () => {
      const FormContainer = document.getElementById('searchFormContainer');
      FormContainer.classList.replace('hide', 'show');
    };
  
    let links = [];
    if (Object.keys(useParams()).length === 0) {
      links = [
        { path: '/', text: <AiOutlineHome />, key: 1 },
        { path: '/', text: 'MARKET CAP', key: 2, className:"nav-text" },
        {
          path: '/',
          text: <AiOutlineKey onClick={handleOpenSearch} />,
          key: 3,
        },
      ];
    } else {
      links = [
        { path: '/', text: <AiOutlineLeft />, key: 1 },
        { path: '/', text: 'COMPANY', key: 2 },
        { path: 'about', text: <AiOutlineQuestionCircle />, key: 3 },
      ];
    }
  
    return (
      <nav>
        <ul className='nav'>
          {links.map((link) => (
            <li key={link.key}>
              <NavLink to={link.path} className="nav-icon">{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;