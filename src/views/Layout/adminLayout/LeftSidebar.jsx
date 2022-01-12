const LeftSidebar = () => (
  <div className="left-sidebar">
    <div className="left-sidebar-header">
      <h3>
        <i className="fas fa-tachometer-alt" /> Dashboard
      </h3>
    </div>
    <div className="left-sidebar-menu">
      <ul>
        <li>
          <a href="/admin/dashboard">
            <i className="fas fa-tachometer-alt" /> Dashboard
          </a>
        </li>
        <li>
          <a href="/admin/users">
            <i className="fas fa-users" /> Users
          </a>
        </li>
        <li>
          <a href="/admin/products">
            <i className="fas fa-box-open" /> Products
          </a>
        </li>
        <li>
          <a href="/admin/categories">
            <i className="fas fa-list" /> Categories
          </a>
        </li>
        <li>
          <a href="/admin/orders">
            <i className="fas fa-shopping-cart" /> Orders
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default LeftSidebar;
