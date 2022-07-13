import Header from "../header";
import Footer from "../footer";
const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col text-dark-500 dark:text-white">
      <Header />
      <div className=" flex-1 ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
