import { BELL_NOTIFICATION_SVG, SEARCH_SVG, SETTINGS_SVG } from '../../../assests/images';

const Header = () => (
  <header className="admin-header-container">
    <div className="admin-search-container">
      <input type="text" placeholder="Search" className="admin-search-input" />
      <img src={SEARCH_SVG} alt="search" className="search-img" />
    </div>
    <div className="admin-header-icons">
      <img src={BELL_NOTIFICATION_SVG} alt="notification" />
      <img src={SETTINGS_SVG} alt="settings" />
    </div>
    <div className="vertical-line" />
    <div className="admin-header-user-info d-flex justify-content-center align-items-center">
      <div className="admin-header-user-info-name">
        <span>
          Hello, <span className="profile-name-text">Smanatha</span>
        </span>
      </div>
      <div className="profile-img" />
    </div>
  </header>
);

export default Header;
