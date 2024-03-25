import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link
        to="/upload"
        className={`nav-link ${pathname.includes('upload') ? 'active' : ''}`}
      >
        Upload Page
      </Link>
      <Link
        to="/textbox"
        className={`nav-link ${pathname.includes('texbox') ? 'active' : ''}`}
      >
        Text Box Page
      </Link>
    </nav>
  );
};

export default Navigation;
