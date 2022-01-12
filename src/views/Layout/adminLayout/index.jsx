import Header from './Header';
import LeftSidebar from './LeftSidebar';

const AdminLayout = props => {
  const { children } = props;
  return (
    <>
      <Header />
      <LeftSidebar />
      {children}
    </>
  );
};
export default AdminLayout;
