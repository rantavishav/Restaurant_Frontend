import Header from './Header';
import LeftSidebar from './LeftSidebar';

const AdminLayout = props => {
  const { children } = props;
  return (
    <div className="admin-main-page">
      <Header />
      <LeftSidebar />
      <div className="admin-main-content">{children}</div>
    </div>
  );
};
export default AdminLayout;
