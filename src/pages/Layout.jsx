import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Link />
    </>
  );
};
export default Layout;
