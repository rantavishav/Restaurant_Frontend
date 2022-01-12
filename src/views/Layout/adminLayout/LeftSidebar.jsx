import { Link } from 'react-router-dom';
import {
  DASHBOARD_ANALYSIS_SVG,
  DASHBOARD_CUSTOMER_SVG,
  DASHBOARD_FOOD_DETAIL_SVG,
  DASHBOARD_FOOD_SVG,
  DASHBOARD_HOME_SVG,
  DASHBOARD_LIST_SVG,
  DASHBOARD_REVIEW_SVG,
  DASHBOARD_WALLET_SVG,
  WEBSITE_LOGO_SVG,
} from '../../../assests/images';

const adminSidebar = () => (
  <div className="admin-left-sidebar">
    <div className="admin-sidebar-header">
      <img src={WEBSITE_LOGO_SVG} alt="website logo" />
      <div className="admin-sidebar-header-title">Kitchen Admin Dashboard</div>
    </div>
    <ul className="admin-sidebar-items">
      <li className="admin-sidebar-item">
        <Link to="/admin/dashboard">
          <img src={DASHBOARD_HOME_SVG} alt="dashboard" />
          <div className="admin-sidebar-item-title">Dashboard</div>
        </Link>
      </li>
      <li className="admin-sidebar-item">
        <Link to="/admin/dashboard">
          <img src={DASHBOARD_LIST_SVG} alt="dashboard" />

          <div className="admin-sidebar-item-title">Order List</div>
        </Link>
      </li>
      <li className="admin-sidebar-item">
        <Link to="/admin/dashboard">
          <img src={DASHBOARD_CUSTOMER_SVG} alt="dashboard" />

          <div className="admin-sidebar-item-title">Customer</div>
        </Link>
      </li>
      <li className="admin-sidebar-item">
        <Link to="/admin/dashboard">
          <img src={DASHBOARD_ANALYSIS_SVG} alt="dashboard" />

          <div className="admin-sidebar-item-title">Analysis</div>
        </Link>
      </li>
      <li className="admin-sidebar-item">
        <Link href="/admin/dashboard">
          <img src={DASHBOARD_REVIEW_SVG} alt="dashboard" />

          <div className="admin-sidebar-item-title">Reviews</div>
        </Link>
      </li>
      <li className="admin-sidebar-item">
        <Link to="/admin/dashboard">
          <img src={DASHBOARD_FOOD_SVG} alt="dashboard" />
          <div className="admin-sidebar-item-title">Foods</div>
        </Link>
      </li>
      <li className="admin-sidebar-item">
        <Link to="/admin/dashboard">
          <img src={DASHBOARD_FOOD_DETAIL_SVG} alt="dashboard" />
          <div className="admin-sidebar-item-title">Food Details</div>
        </Link>
      </li>
      <li className="admin-sidebar-item">
        <Link to="/admin/dashboard">
          <img src={DASHBOARD_WALLET_SVG} alt="dashboard" />
          <div className="admin-sidebar-item-title">Wallet</div>
        </Link>
      </li>
    </ul>
  </div>
);

export default adminSidebar;
