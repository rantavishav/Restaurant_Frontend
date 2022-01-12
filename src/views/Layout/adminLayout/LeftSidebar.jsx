import { useHistory, Link } from 'react-router-dom';
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

const adminSidebar = () => {
  const history = useHistory();
  const { pathname } = history.location;

  return (
    <div className="admin-left-sidebar">
      <div className="admin-sidebar-header">
        <img src={WEBSITE_LOGO_SVG} alt="website logo" />
        <div className="admin-sidebar-header-title">Kitchen Admin Dashboard</div>
      </div>
      <div className="admin-sidebar-items">
        <Link
          to="/admin/dashboard"
          className={`admin-sidebar-item ${pathname.includes('/dashboard') && 'active'}`}
        >
          <img src={DASHBOARD_HOME_SVG} alt="dashboard" />
          <div className="admin-sidebar-item-title">Dashboard</div>
        </Link>

        <Link
          to="/admin/orderList"
          className={`admin-sidebar-item ${pathname.includes('/orderList') && 'active'}`}
        >
          <img src={DASHBOARD_LIST_SVG} alt="dashboard" />

          <div className="admin-sidebar-item-title">Order List</div>
        </Link>

        <Link
          to="/admin/customer"
          className={`admin-sidebar-item ${pathname.includes('/customer') && 'active'}`}
        >
          <img src={DASHBOARD_CUSTOMER_SVG} alt="dashboard" />

          <div className="admin-sidebar-item-title">Customer</div>
        </Link>

        <Link
          to="/admin/analysis"
          className={`admin-sidebar-item ${pathname.includes('/analysis') && 'active'}`}
        >
          <img src={DASHBOARD_ANALYSIS_SVG} alt="dashboard" />

          <div className="admin-sidebar-item-title">Analysis</div>
        </Link>

        <Link
          to="/admin/reviews"
          className={`admin-sidebar-item ${pathname.includes('/reviews') && 'active'}`}
        >
          <img src={DASHBOARD_REVIEW_SVG} alt="dashboard" />

          <div className="admin-sidebar-item-title">Reviews</div>
        </Link>

        <Link
          to="/admin/foods"
          className={`admin-sidebar-item ${pathname.includes('/foods') && 'active'}`}
        >
          <img src={DASHBOARD_FOOD_SVG} alt="dashboard" />
          <div className="admin-sidebar-item-title">Foods</div>
        </Link>

        <Link
          to="/admin/foodDetails"
          className={`admin-sidebar-item ${pathname.includes('/foodDetails') && 'active'}`}
        >
          <img src={DASHBOARD_FOOD_DETAIL_SVG} alt="dashboard" />
          <div className="admin-sidebar-item-title">Food Details</div>
        </Link>

        <Link
          to="/admin/wallet"
          className={`admin-sidebar-item ${pathname.includes('/wallet') && 'active'}`}
        >
          <img src={DASHBOARD_WALLET_SVG} alt="dashboard" />
          <div className="admin-sidebar-item-title">Wallet</div>
        </Link>
      </div>
    </div>
  );
};
export default adminSidebar;
